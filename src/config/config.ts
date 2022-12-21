import dotenv from 'dotenv';
dotenv.config();

// obj destructing
const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_DBPort,
  NODE_ENV,
  DB_HOST,
  SALT,
  PEPPER,
  JWTKEY,
} = process.env;

export default {
  port: PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  database_test: POSTGRES_DB_TEST,
  dbPort: Number(POSTGRES_DBPort),
  NODE_ENV: NODE_ENV,
  host: DB_HOST,
  salt: SALT,
  pepper: PEPPER,
  jwtKey: JWTKEY,
};
