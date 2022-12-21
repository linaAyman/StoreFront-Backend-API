CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL, 
    email VARCHAR(50) UNIQUE,
    password varchar(255) NOT NULL
);