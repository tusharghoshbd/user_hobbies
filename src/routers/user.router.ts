import { Router } from "express";
import * as userController from "../controllers/user.controller";

export const userRouter: Router = Router();
/**
 * @swagger
 * /api/users:
 *  get:
 *    tags:
 *       - Users
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
userRouter.get('/', userController.getAllUser)



userRouter.post('/', userController.saveUser)
