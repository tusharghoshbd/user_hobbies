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
 *    parameters:
 *      - in: query
 *        name: pageSize
 *        type: number
 *        description: Page size of pagination. Default page size is 1000.
 *      - in: query
 *        name: pageNumber
 *        type: number
 *        description: Page number of pagination. Default page number is 1.
 *    responses:
 *      '200':
 *        description: A successful response
 */
userRouter.get('/', userController.getAllUser)

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Create a new user
 *     parameters:
 *       - in: body
 *         name: name
 *         required: true
 *         type: string
 *         description: User name.
 *     responses:
 *       '200':
 *           description: Returns user creation successful response
 *           content:
 *              application/json
 */
userRouter.post('/', userController.saveUser)

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Update a user
 *     parameters:
 *       - in: body
 *         name: name
 *         required: true
 *         type: string
 *         description: User name that need to update.
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: User id.
 *     responses:
 *       '200':
 *           description: Returns user update successful response
 *           content:
 *              application/json
 */
userRouter.put('/:id', userController.updateUser)

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: User id.
 *     responses:
 *       '200':
 *           description: Returns user deletion successful response
 *           content:
 *              application/json
 */
userRouter.delete('/:id', userController.deleteUser)
