import { UserModel } from '../models/user.model';
import { Request, Response } from 'express';
import config from '../config/config';
import jwt from 'jsonwebtoken';

//Create a user from userModel
const userModel = new UserModel();

//CRUD OPERATIONS
//1- GET ALL USERS (INDEX)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error); //server error
  }
};

//2- GET USER BY ID (SHOW)
export const getUser = async (req: Request, res: Response) => {
  try {
    const fetchedUser = await userModel.getUserById(Number(req.params.id));
    res.status(200).json(fetchedUser);
  } catch (error) {
    res.status(404).json(error); //Not Found
  }
};

//3- CREATE A NEW USER AND CREATE A TOKEN FOR IT (CREATE)
export const createUser = async (req: Request, res: Response) => {
  try {
    //request body is a User object
    const createdUser = await userModel.createUser(req.body);
    const token = jwt.sign(createdUser, config.jwtKey as string);
    res.status(201).json(token); //send the token in response
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//4- UPDATE A USER DATA (UPDATE)
export const updateUser = async (req: Request, res: Response) => {
  try {
    //request body is a User object
    const updatedUser = await userModel.updateUser(req.body);
    res.status(200).json(updatedUser); //send the updated user in response
  } catch (error) {
    res.status(400).json(error); //Bad request
  }
};

//5- DELETE A USER BY ID (DELETE)

export const deleteUser = async (req: Request, res: Response) => {
  try {
    //get id from req params
    const deletedUser = await userModel.deleteUser(Number(req.params.id));
    res.status(200).json(deletedUser); //send the updated user in response
  } catch (error) {
    res.status(404).json(error); //Not found
  }
};
