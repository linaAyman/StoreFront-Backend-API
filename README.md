# Storefront Backend Udacity FullStack Nanodegree 2nd Project

## Summary

This project is a backend API to simulate a web-store application. It's built with Postgres Database, Nodejs and Express.

## Technologies this Project is built with

- [postgres](https://www.postgresql.org/) - Relational Database.
- [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - for database migrations.
- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime, for the project logic.
- [TypeScript](https://www.typescriptlang.org/).
- [Express](https://expressjs.com/) - The web framework.
- [jsonwebtoken](https://jwt.io/) - working with jwts for security.
- [Jasmine](https://jasmine.github.io/) - For unit testing.

## Building and starting the server


### 1. Installing Dependencies

`npm install`

### 2. Build

`npm run build`

This output JavaScript code will be built in the `./dist` folder.

### 3. Creating PSQL Databases (main DB and Test DB)

run the following commands in PSQL

`CREATE DATABASE store;`
`CREATE DATABASE store_test;`

### 4. Creatin a .env file for configurations

Create .env File with The Following Variables:

`PORT=3000`
`DB_HOST=localhost`
`POSTGRES_USER=(replace with your postgres user)`
`POSTGRES_PASSWORD=(replace with your postgres password)`
`POSTGRES_DB=store`
`POSTGRES_DB_TEST=store_test`
`POSTGRES_DB_Port=5432`
`NODE_ENV=dev`
`SALT=10`
`PEPPER=ghgdfkjldnmlfh`
`JWTKEY=udacitystorefrontdatabase`

### 5. Database Migrations

`npm run dev-db-up`
`npm run dev-db-down`

First command creates the all tables, and the second one drops all tables from the `store` database.

### 6. Starting the server after the build

After running the build command run this command.
`npm run start`

This will start the server on port `3000` (or whatever port in the `.env` file).

## DATABASE SCHEMA & API ENDPOINTS

The details of the database schema as well as the provided endpoints by this API is contained in the `REQUIREMENTS.md` file. 

## Testing and Linting

These are all the commands related to linting, formatting and Testing (with jasmine).

### 1. Formating (prettier)

`npm run prettify`

### 2. Linting (eslint)

`npm run lint`

### 3. Testing

`npm run test`
