import express from 'express';
import order_productRouter from './api/order-product.router';
import orderRouter from './api/order.router';
import productRouter from './api/product.router';
import userRouter from './api/user.router';

const routes = express.Router();

routes.use('/users', userRouter);

routes.use('/products', productRouter);

routes.use('/orders', orderRouter);

routes.use('/orders', order_productRouter);

export default routes;
