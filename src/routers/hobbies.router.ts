import { Router } from "express";
import * as hobbiesController from "../controllers/hobbies.controller";

export const hobbiesRouter: Router = Router();

/**
 * @swagger
 * /api/users/{userId}/hobbies:
 *  get:
 *    tags:
 *       - Hobbies
 *    description: Use to request all hobbies by user id
 *    parameters:
 *      - in: path
 *        name: userId
 *        type: string
 *        required: true
 *        description: User id.
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
hobbiesRouter.get('/users/:userId/hobbies', hobbiesController.getAllHobbiesByUserId)

/**
 * @swagger
 * /api/users/{userId}/hobbies:
 *   post:
 *     tags:
 *       - Hobbies
 *     description: Create a new hobby
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         type: string
 *         description: User id.
 *       - in: body
 *         name: name
 *         required: true
 *         type: string
 *         description: Hobby name.
 *       - in: body
 *         name: passionLevel
 *         type: string
 *         description: Passion level. passionLevel should be like 'Very-High', 'High', 'Medium', 'Low'
 *       - in: body
 *         name: year
 *         type: number
 *         description: Year.
 *     responses:
 *       '200':
 *           description: Returns hobby creation successful response
 *           content:
 *              application/json
 */
hobbiesRouter.post('/users/:userId/hobbies', hobbiesController.saveHobbies)

/**
 * @swagger
 * /api/users/{userId}/hobbies/{id}:
 *   put:
 *     tags:
 *       - Hobbies
 *     description: Update a hobby
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         type: string
 *         description: User id.
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Hobby id.
 *       - in: body
 *         name: name
 *         type: string
 *         description: Hobby name that need to update.
 *       - in: body
 *         name: passionLevel
 *         type: string
 *         description: Hobby passionLevel that need to update.
 *       - in: body
 *         name: year
 *         type: number
 *         description: Hobby year that need to update.
 *     responses:
 *       '200':
 *           description: Returns hobby update successful response
 *           content:
 *              application/json
 */
hobbiesRouter.put('/users/:userId/hobbies/:id', hobbiesController.updateHobbies)

/**
 * @swagger
 * /api/users/{userId}/hobbies/{id}:
 *   delete:
 *     tags:
 *       - Hobbies
 *     description: Delete a hobby
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         type: string
 *         description: User id.
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Hobby id.
 *     responses:
 *       '200':
 *           description: Returns hobby deletion successful response
 *           content:
 *              application/json
 */
hobbiesRouter.delete('/users/:userId/hobbies/:id', hobbiesController.deleteHobbies)