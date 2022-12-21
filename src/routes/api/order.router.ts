import express from 'express';
import * as orderController from '../../controllers/order.controller';
import { authenticate } from '../../middlewares/auth.middleware';

//create an express router
const orderRouter = express.Router();

//User Routes
orderRouter.get('/', authenticate, orderController.getAllOrders);
orderRouter.get('/:id', authenticate, orderController.getOrderById);
orderRouter.post('/', authenticate, orderController.createOrder);
orderRouter.patch('/', authenticate, orderController.updateOrder);
orderRouter.delete('/:id', authenticate, orderController.deleteOrder);

export default orderRouter;
