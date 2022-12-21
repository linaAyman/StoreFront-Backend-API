### Data Schema

#### users Table

| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| first_name | VARCHAR(20) | NOT NULL |
| last_name | VARCHAR(20) | NOT NULL |
| email | VARCHAR(50) | UNIQUE |
| password | VARCHAR(255) | NOT NULL |

#### products Table

| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| name | VARCHAR(50) | NOT NULL |
| price | INT | NOT NULL |

#### orders Table

| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| status | VARCHAR(20) DEFAULT 'active' | |
| user_id |INT |  REFERENCES users(id) |

#### Orders_products Table

| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| quantity | INT DEFAULT 1 |  |
| order_id | BIGINT | REFERENCES orders(id) ON DELETE SET NULL|
| product_id | BIGINT | REFERENCES products(id) ON DELETE SET NULL|



###  API Endpoints
#### Users

- Index (GET ALL USERS)
  * Method           -  GET
  * Authorization required    - Bearer <token>
  * Parameters        - none
  * Usage             - list all users
  * http://localhost:3000/api/users

- Show (GET USER BY ID)
  * Method           -  GET
  * Authorization required    - Bearer <token>
  * Parameters        - id
  * Usage             - list a specific User
  * http://localhost:3000/api/users/:id
 

- Create
  * Method           -  POST
  * Authorization required    - No
  * Parameters        - (a User type object with these values: firstName, lastName, email, password) (sent in the request body)
  * Usage             -  create a new User
  * http://localhost:3000/api/users


- Update
  * Method           -  PATCH
  * Authorization required    - Bearer <token>
  * Parameters        -  (a User type object with these values: id, firstName, lastName, email, password) (sent in the request body)
  * Usage             -  edit an existing User
  * http://localhost:3000/api/users

- Delete
  * Method           -  DELETE
  * Authorization required    - Bearer <token>
  * Parameters        -  id
  * Usage             -  Delete an existing User
  * http://localhost:3000/api/users/:id

#### Products

- Index (GET ALL PRODUCTS)
  * Method           -  GET
  * Authorization required    - No
  * Parameters        - none
  * Usage             - list all products
  * http://localhost:3000/api/products

- Show (GET PRODUCT BY ID)
  * Method           -  GET
  * Authorization required    - No
  * Parameters        - id
  * Usage             - list a specific product
  * http://localhost:3000/api/products/:id
 

- Create
  * Method           -  POST
  * Authorization required    - Bearer <token>
  * Parameters        - ( a Product type object with these values: name, price) (sent in the request body)
  * Usage             -  create a new product
  * http://localhost:3000/api/products


- Update
  * Method           -  PATCH
  * Authorization required    - Bearer <token>
  * Parameters        -  ( a Product type object with these values: id, name, price) (sent in the request body)
  * Usage             -  edit an existing product
  * http://localhost:3000/api/products

- Delete
  * Method           -  DELETE
  * Authorization required    - Bearer <token>
  * Parameters        -  id
  * Usage             -  Delete an existing product
  * http://localhost:3000/api/products/:id

#### Orders

- Index 
  * Method           -  GET
  * Authorization required    - Bearer <token>
  * Parameters        - none
  * Usage             - list all orders
  * http://localhost:3000/api/orders

- Show 
  * Method           -  GET
  * Authorization required    - Bearer <token>
  * Parameters        - id
  * Usage             - list a specific order
  * http://localhost:3000/api/orders/:id
 

- Create
  * Method           -  POST
  * Authorization required    - Bearer <token>
  * Parameters        - (an Order type object with these values: status, userId) (sent in the request body)
  * Usage             -  create a new order
  * http://localhost:3000/api/orders


- Update
  * Method           -  PATCH
  * Authorization required    - Bearer <token>
  * Parameters        -  (an Order type object with these values: id, status) (sent in the request body)
  * Usage             -  edit an existing order
  * http://localhost:3000/api/orders

- Delete
  * Method           -  DELETE
  * Authorization required    - Bearer <token>
  * Parameters        -  id
  * Usage             -  Delete an existing order
  * http://localhost:3000/api/orders/:id

- addProduct (TO ADD PRODUCT TO ORDER)
  * Method           -  POST
  * Authorization required    - Bearer <token>
  * Parameters        -  (an OrderProduct type object with these valuse: quantity, orderId, productId) (quantity and orderId are sent in the request body, the orderId is sent in the request params)
  * Usage             - Add products to an existing order
  * http://localhost:3000/api/orders/:id/products

- updateProduct (TO MODIFY PRODUCT QUANTITY IN ORDER)
  * Method           -  PATCH
  * Authorization required    - Bearer <token>
  * Parameters        -  (an OrderProduct type object with these valuse: id,quantity, orderId, productId) (id, quantity and orderId are sent in the request body, the orderId is sent in the request params)
  * Usage             - Add products to an existing order
  * http://localhost:3000/api/orders/:id/products

- Delete (TO DELETE PRODUCT FROM ORDER)
  * Method           -  DELETE
  * Authorization required    - Bearer <token>
  * Parameters        -  id (ORDER_PRODUCT ID)
  * Usage             -  Delete an existing order
  * http://localhost:3000/api/orders/products/:id

  


