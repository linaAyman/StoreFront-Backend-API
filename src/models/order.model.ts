import { Order } from '../types/order.type';
import pool from '../database/index.db';

export class OrderModel {
  //Handle all CRUD operations

  //GET ALL ORDERS (INDEX)
  async getAllOrders(): Promise<Order[]> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT * FROM orders';
      const res = await conn.query(query);

      //end the connection and return rows
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(
        `Failed to retreive orders data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //GET ALL ORDERS BY USER_ID (SHOW)
  async getOrderById(userId: number): Promise<Order[]> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT * FROM orders WHERE user_id=($1)';
      const res = await conn.query(query, [userId]);

      //end the connection and return rows
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(
        `Failed to retreive assigned user order/s data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //CREATE NEW ORDER (CREATE)
  async createOrder(order: Order): Promise<Order> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'INSERT INTO orders (status,user_id) VALUES ($1,$2) RETURNING *';

      const res = await conn.query(query, [order.status, order.userId]);
      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to create a new order due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //UPDATE ORDER STATUS (UPDATE)
  async updateOrder(order: Order): Promise<Order> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query = 'UPDATE orders SET status=($2) WHERE id=($1) RETURNING *'; //no need to update userId

      const res = await conn.query(query, [order.id, order.status]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update order status due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //DELETE ORDER (DELETE)
  async deleteOrder(id: number): Promise<Order> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query = 'DELETE FROM orders WHERE id=($1) RETURNING *';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete this order due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }
}
