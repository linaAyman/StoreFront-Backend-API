import express from 'express';
import * as order_productController from '../../controllers/order-product.controller';
import { authenticate } from '../../middlewares/auth.middleware';

//create an express router
const order_productRouter = express.Router();

//User Routes
order_productRouter.post(
  '/:id/products', //:id is the orderid, product id is sent in body
  authenticate,
  order_productController.addProductOrder
);
order_productRouter.patch(
  '/:id/products', //:id is the orderid, product id is sent in body and order_product id is sent in body as well
  authenticate,
  order_productController.updateProductOrder
);
order_productRouter.delete(
  '/products/:id', //id here is the order_product id
  authenticate,
  order_productController.deleteProductOrder
);

export default order_productRouter;
