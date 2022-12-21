import { ProductModel } from '../models/product.model';
import { Request, Response } from 'express';

//create a product from productModel
const productModel = new ProductModel();

//CRUD OPERATIONS
//1- GET ALL PRODUCTS (INDEX)
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error); //server error
  }
};

//2- GET PRODUCT BY ID (SHOW)
export const getProductById = async (req: Request, res: Response) => {
  try {
    const fetchedProduct = await productModel.getProductById(
      Number(req.params.id)
    );
    res.status(200).json(fetchedProduct);
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};

//3- CREATE A NEW PRODUCT (CREATE)
export const createProduct = async (req: Request, res: Response) => {
  try {
    //request body is a Product object
    const createdProduct = await productModel.createProduct(req.body);
    res.status(201).json(createdProduct); //send the created product in response
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//4- UPDATE A PRODUCT DATA (UPDATE)
export const updateProduct = async (req: Request, res: Response) => {
  try {
    //request body is a Product object
    const updatedProduct = await productModel.updateProduct(req.body);
    res.status(200).json(updatedProduct); //send the updated product in response
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//5- DELETE A PRODUCT BY ID (DELETE)
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    //get id from params
    const deletedProduct = await productModel.deleteProduct(
      Number(req.params.id)
    );
    res.status(200).json(deletedProduct); //send the updated product in response
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};
