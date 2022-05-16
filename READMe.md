# POST /clients save user
  ## Method: POST
  ### ENDPOINT: /clients
  ### Body:
  
  ```
{
  "name": "John Doe",
  "email": "test@email.com",
  "password": "123456"
    }
  Response:
{
   {"user": "6282ad4cb3ad101440762e29"}
}
  ```
# POST /clients/login
  ## Method: POST
  ### ENDPOINT: /clients/login
  ### Body:
  
  ```
{
  "email": "test@email.com",
  "password": "123456"
    }
  Response:
{
   {"user": "6282ad4cb3ad101440762e29"}
}
  ```

# GET /clients/:id
   ## Method: GET
   ### ENDPOINT: /clients/:id
   ### Response:
   
   ```
{
   {
  "_id": "6282ad4cb3ad101440762e29",
  "id": "4b1864c6-2739-4463-b04e-1f2abde2962d",
  "name": "Scottlexium",
  "email": "test@email.com",
  "pin": "hashedpin",
  "createdAt": "2022-05-16T20:00:12.137Z",
  "updatedAt": "2022-05-16T20:00:12.137Z",
  "__v": 0
   }
}
  ```
# GET /clients
   ## Method: GET
   ### ENDPOINT: /clients
   ### Response:
   
   
   ```
{
[
    {
    "_id": "6282a4b610ee40afb752e314",
    "id": "941a96fa-69fb-446e-9fbd-48af844d90a9",
    "name": "Scottlexium",
    "email": "scottlexium@gmail.com",
    "pin": "hashedpin",
    "createdAt": "2022-05-16T19:23:34.949Z",
    "updatedAt": "2022-05-16T19:23:34.949Z",
    "__v": 0
  },
  {
    "_id": "6282ad4cb3ad101440762e29",
    "id": "4b1864c6-2739-4463-b04e-1f2abde2962d",
    "name": "Scottlexium",
    "email": "scottlexium@gmail.com",
    "pin": "hashedpin",
    "createdAt": "2022-05-16T20:00:12.137Z",
    "updatedAt": "2022-05-16T20:00:12.137Z",
    "__v": 0
  }
]
}
   ```
