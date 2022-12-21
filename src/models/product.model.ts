import { Product } from '../types/product.type';
import pool from '../database/index.db';

//A representation for the products table
export class ProductModel {
  //Handle all CRUD operations

  //GET ALL PRODUCTS (INDEX)
  async getAllProducts(): Promise<Product[]> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT * FROM products';
      const res = await conn.query(query);

      //end the connection and return rows
      conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(
        `Failed to retreive products data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //GET PRODUCT BY ID (SHOW)
  async getProductById(id: number): Promise<Product> {
    try {
      //start a connection to the database
      const conn = await pool.connect();
      //run the sql query
      const query = 'SELECT * FROM products WHERE id=($1)';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to retreive this product data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //CREATE NEW PRODUCT (CREATE)
  async createProduct(product: Product): Promise<Product> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'INSERT INTO products (name,price) VALUES ($1,$2) RETURNING *';

      const res = await conn.query(query, [product.name, product.price]);
      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to create a new product due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //UPDATE PRODUCT (UPDATE)
  async updateProduct(product: Product): Promise<Product> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query =
        'UPDATE products SET name=($2), price=($3) WHERE id=($1) RETURNING *';

      const res = await conn.query(query, [
        product.id,
        product.name,
        product.price,
      ]);
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update product data due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }

  //DELETE USER (DELETE)
  async deleteProduct(id: number): Promise<Product> {
    try {
      //start a connection to the database
      const conn = await pool.connect();

      //run the sql query
      const query = 'DELETE FROM products  WHERE id=($1) RETURNING *';
      const res = await conn.query(query, [id]);

      //end the connection and return rows
      conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete this product due to this error: ${error}`
      ); //to avoid returning undefined
    }
  }
}
