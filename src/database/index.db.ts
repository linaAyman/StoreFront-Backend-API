import { Pool } from 'pg';
import config from '../config/config';

// const pool = new Pool({
// database: config.database,
// host: config.host,
// password: config.password,
// port: config.dbPort,
// user: config.user,
// });

let database;

if (config.NODE_ENV === 'dev') {
  database = {
    database: config.database,
    host: config.host,
    password: config.password,
    port: config.dbPort,
    user: config.user,
  };
} else if (config.NODE_ENV === 'test') {
  database = {
    database: config.database_test,
    host: config.host,
    password: config.password,
    port: config.dbPort,
    user: config.user,
  };
}

const pool = new Pool(database);

export default pool;
