import { User } from '../types/user.type';
import config from '../config/config';
import pool from '../database/index.db';
import bcrypt from 'bcrypt';

const salt = Number(config.salt);
const pepper = config.pepper as string;

//A representation for the user table
export class UserModel {
  //Handle all CRUD operations

  //GET ALL USERS (INDEX)
  async getAllUsers(): Promise<User[]> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT id,first_name,last_name FROM users';
      const res = await conn.query(query);

      //end the connection and return rows
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(
        `Failed to retreive users data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //GET USER BY ID (SHOW)
  async getUserById(id: number): Promise<User> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT id,first_name,last_name FROM users WHERE id=($1)';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to retreive this user data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //CREATE NEW USERR (CREATE)
  async createUser(user: User): Promise<User> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'INSERT INTO users (first_name,last_name,email,password) VALUES ($1,$2,$3,$4) RETURNING *';

      //hash the password before storing it
      const hashedPass = bcrypt.hashSync(`${user.password}${pepper}`, salt);

      const res = await conn.query(query, [
        user.firstName,
        user.lastName,
        user.email,
        hashedPass,
      ]);
      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to create a new user due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //UPDATE USER (UPDATE)
  async updateUser(user: User): Promise<User> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5)  WHERE id=($1) RETURNING *';

      //hash the password before storing it
      const hashedPass = bcrypt.hashSync(`${user.password}${pepper}`, salt);

      const res = await conn.query(query, [
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        hashedPass,
      ]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Failed to update user data due to this error: ${error}`); //to avoid returning undefined
    }
  }

  //DELETE USER (DELETE)
  async deleteUser(id: number): Promise<User> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query = 'DELETE FROM users  WHERE id=($1) RETURNING *';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Failed to delete this user due to this error: ${error}`); //to avoid returning undefined
    }
  }
}
