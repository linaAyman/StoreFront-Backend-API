import express from 'express';
import * as userController from '../../controllers/user.controller';
import { authenticate } from '../../middlewares/auth.middleware';

//create an express router
const userRouter = express.Router();

//User Routes
userRouter.get('/', authenticate, userController.getAllUsers);
userRouter.get('/:id', authenticate, userController.getUser);
userRouter.post('/', userController.createUser);
userRouter.patch('/', authenticate, userController.updateUser);
userRouter.delete('/:id', authenticate, userController.deleteUser);

export default userRouter;
