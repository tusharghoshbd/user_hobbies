import { Request, Response } from "express";
import { HobbiesModel } from "../models/hobbies.model"
import { UserModel } from "../models/user.model"
import { hobbiesValidator } from "../validator/hobbies.validator"
import { serverError, resourceError } from "../services/utils.service"

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const getAllHobbies = async (req: Request, res: Response) => {

    try {
        // pagination
        const { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } = process.env;
        const pageNumber: number = Number(req.query.pageNumber) || Number(DEFAULT_PAGE_NUMBER);
        const pageSize: number = Number(req.query.pageSize) || Number(DEFAULT_PAGE_SIZE)
        const skip = (pageNumber - 1) * pageSize

        const hobbies = await HobbiesModel.find().limit(pageSize).skip(skip);
        return res.status(200).json({ success: true, data: hobbies });

    } catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const getAllHobbiesByUserId = async (req: Request, res: Response) => {

    try {
        const { userId } = req.params;
        // pagination
        const { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } = process.env;
        const pageNumber: number = Number(req.query.pageNumber) || Number(DEFAULT_PAGE_NUMBER);
        const pageSize: number = Number(req.query.pageSize) || Number(DEFAULT_PAGE_SIZE)
        const skip = (pageNumber - 1) * pageSize

        const hobby = await UserModel.findOne({ _id: userId }).populate({
            path: 'hobbies',
            options: {
                limit: pageSize,
                skip
            }
        });
        return res.status(200).json({ success: true, data: hobby.hobbies });

    } catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const saveHobbies = async (req: Request, res: Response) => {

    try {
        const { userId } = req.params;
        const { passionLevel, name, year } = req.body;
        const validate = hobbiesValidator({ passionLevel, name, year });
        if (validate.isValid === false) {
            return res.status(400).json(validate.error);
        }

        const hobbies = await HobbiesModel.create({ passionLevel, name, year });
        const user = await UserModel.findOneAndUpdate({ _id: userId },
            {
                $push: {
                    hobbies: { ...hobbies }
                }
            }
        );

        return res.status(200).json({ success: true, hobbies });
    }
    catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const updateHobbies = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const hobbies = await HobbiesModel.findOneAndUpdate({ _id: id },
            {
                $set: {
                    ...req.body
                }
            }
        );

        return res.status(200).json({ success: true, hobbies });
    }
    catch (error: any) {
        serverError(res, error)
    }
}


/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const deleteHobbies = async (req: Request, res: Response) => {

    try {
        const { userId, id } = req.params;
        const hobby = await HobbiesModel.findOne({ _id: id });
        const user = await UserModel.findOneAndUpdate({ _id: userId }, { $pullAll: { hobbies: [{ ...hobby }] } });
        const hobbies = await HobbiesModel.deleteOne({ _id: id });
        return res.status(200).json({ success: true, hobbies });
    }
    catch (error: any) {
        serverError(res, error)
    }
}

