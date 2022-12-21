import express from 'express';
import * as productController from '../../controllers/product.controller';
import { authenticate } from '../../middlewares/auth.middleware';

//create an express router
const productRouter = express.Router();

//User Routes
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', authenticate, productController.createProduct);
productRouter.patch('/', authenticate, productController.updateProduct);
productRouter.delete('/:id', authenticate, productController.deleteProduct);

export default productRouter;
