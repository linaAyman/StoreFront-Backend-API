import { OrderProduct } from '../types/order-product.type';
import pool from '../database/index.db';

export class OrderProductModel {
  //Handle only create (and update?)

  //ADD PRODUCT TO AN ORDER (CREATE)
  async addProductOrder(product: OrderProduct): Promise<OrderProduct> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'INSERT INTO orders_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';

      const res = await conn.query(query, [
        product.quantity,
        product.orderId,
        product.productId,
      ]);
      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add product with id: ${product.productId} to order with id: ${product.orderId} due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //ADD ANOTHER PRODUCT OR CHANGE PRODUCT QUANTITY IN AM ORDER (UPDATE)
  async updateProductOrder(product: OrderProduct): Promise<OrderProduct> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'UPDATE orders_products SET quantity = $2, order_id = $3, product_id = $4 WHERE id = $1 RETURNING *';

      const res = await conn.query(query, [
        product.id,
        product.quantity,
        product.orderId,
        product.productId,
      ]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update order-product relation of id: ${product.id} with product with id: ${product.productId} in order with id: ${product.orderId} status due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //DELETE PRODUCT FROM ORDER (DELETE)
  async deleteProductOrder(id: number): Promise<OrderProduct> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query = 'DELETE FROM orders_products WHERE id=($1) RETURNING *';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete this order-product due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }
}
