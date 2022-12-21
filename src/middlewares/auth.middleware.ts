import { NextFunction, Request, Response } from 'express';
import config from '../config/config';
import jwt from 'jsonwebtoken';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization as string;
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwtKey as string);
    next();

    return;
  } catch (error) {
    return res
      .status(401)
      .json({ error: 'Invalid token or Unauthorized request' });
  }
};
