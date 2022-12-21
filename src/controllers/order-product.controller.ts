import { OrderProductModel } from '../models/order-product.model';
import { OrderProduct } from '../types/order-product.type';
import { Request, Response } from 'express';

//create an order-product from Orderproduct Model
const order_product = new OrderProductModel();

//1- CREATE A NEW PRODUCT-ORDER RELATION (CFEATE)
export const addProductOrder = async (req: Request, res: Response) => {
  const quantity = req.body.quantity;
  const orderId = Number(req.params.id);
  const productId = req.body.productId;

  try {
    const product: OrderProduct = {
      quantity: quantity,
      orderId: orderId,
      productId: productId,
    };
    const addedProduct = await order_product.addProductOrder(product);
    res.status(201).json(addedProduct);
  } catch (error) {
    // console.log('OP CONT ERR: ', error);
    res.status(400).json(error); //Bad request
  }
};

//2- UPDATE PRODUCT-ORDER RELATION (UPDATE)
export const updateProductOrder = async (req: Request, res: Response) => {
  const id = req.body.id;
  const quantity = req.body.quantity;
  const orderId = Number(req.params.id);
  const productId = req.body.productId;

  try {
    const product: OrderProduct = {
      id: id,
      quantity: quantity,
      orderId: orderId,
      productId: productId,
    };
    const updatedProduct = await order_product.updateProductOrder(product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//3- DELETE A RRODUCT-ORDER RELATION (DELETE)
export const deleteProductOrder = async (req: Request, res: Response) => {
  try {
    //get id from req params
    const deletedProductOrder = await order_product.deleteProductOrder(
      Number(req.params.id)
    );
    res.status(200).json(deletedProductOrder); //send the updated product in response
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};
