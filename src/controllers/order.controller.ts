import { OrderModel } from '../models/order.model';
import { Request, Response } from 'express';

//create an order from orderModel
const orderModel = new OrderModel();

//CRUD OPERATIONS
//1- GET ALL ORDER (INDEX)
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderModel.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error); //server error
  }
};

//2- GET ORDER BY ID (SHOW)
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const fetchedOrder = await orderModel.getOrderById(Number(req.params.id));
    res.status(200).json(fetchedOrder);
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};

//3- CREATE A NEW ORDER (CREATE)
export const createOrder = async (req: Request, res: Response) => {
  try {
    //request body is an order object
    const createdOrder = await orderModel.createOrder(req.body);
    res.status(201).json(createdOrder); //send the created order in response
  } catch (error) {
    console.log('ORDER CONTROLLER ERR: ', error);
    res.status(400).json(error); //Bad request
  }
};

//4- UPDATE AN ORDER DATA (UPDATE)
export const updateOrder = async (req: Request, res: Response) => {
  try {
    //request body is an order object
    const updatedOrder = await orderModel.updateOrder(req.body);
    res.status(200).json(updatedOrder); //send the updated order in response
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//5- DELETE A PRODUCT BY ID (DELETE)
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    //get id from req params
    const deletedOrder = await orderModel.deleteOrder(Number(req.params.id));
    res.status(200).json(deletedOrder); //send the updated product in response
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};
