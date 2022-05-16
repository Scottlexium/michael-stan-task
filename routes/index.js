const express = require('express');
const { cookie } = require('express/lib/response');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const mongoose = require('mongoose');
// bcryptjs for hashing Pins
const bcrypt = require('bcryptjs');
// import uuid
const { v4: uuidv4 } = require('uuid');


// express router
const router = express.Router();
// import the index controller

router.get('/', (req, res) => {
    res.send("working")
})
// regiration route with jwt
router.post('/clients', async (req, res) => {
    console.log(req.body)
    // make sure pin is 4 digits
    if (req.body.pin.length !== 4) {
        return res.status(400).send({
            message: 'Pin must be 4 digits'
        })
    }else{
        // create a new user
        const pin = bcrypt.hashSync(req.body.pin, 10);
        const user = new User({
            // i dont know why u need an id but mongoose genrates one for u 
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            pin: pin,
        })
        // save the user to the database
        try {
            const savedUser = await user.save();
            console.log(savedUser);
            res.send({ user: user._id })
        } catch (err) {
            res.status(400).send(err)
        }
    }
});

// get all users
router.get('/clients', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});
// get a user by id
router.get('/clients/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// login a user
router.post('/clients/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send({
                message: 'Invalid email or Pin'
            })
        }
        // check if Pin is correct
        const validPin = bcrypt.compareSync(req.body.pin, user.pin);
        if (!validPin) {
            return res.status(400).send({
                message: 'Invalid email or Pin'
            })
        }
        // create a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        // set the cookie
        res.cookie('t', token, { expire: new Date() + 9999 });
        // return the user
        const { _id, name, email } = user;
        return res.send({ token, user: { _id, name, email } });
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;