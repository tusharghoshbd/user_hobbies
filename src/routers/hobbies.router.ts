import { Router } from "express";
import * as hobbiesController from "../controllers/hobbies.controller";

export const hobbiesRouter: Router = Router();
/**
 * @swagger
 * /api/hobbies:
 *  get:
 *    tags:
 *       - Hobbies
 *    description: Use to request all hobbies
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
hobbiesRouter.get('/', hobbiesController.getAllHobbies)

/**
 * @swagger
 * /api/hobbies/{userId}:
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
hobbiesRouter.get('/:userId', hobbiesController.getAllHobbiesByUserId)

/**
 * @swagger
 * /api/hobbies/{userId}:
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
hobbiesRouter.post('/:userId', hobbiesController.saveHobbies)

/**
 * @swagger
 * /api/hobbies/{id}:
 *   put:
 *     tags:
 *       - Hobbies
 *     description: Update a hobby
 *     parameters:
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
hobbiesRouter.put('/:id', hobbiesController.updateHobbies)

/**
 * @swagger
 * /api/hobbies/{userId}/{id}:
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
hobbiesRouter.delete('/:userId/:id', hobbiesController.deleteHobbies)