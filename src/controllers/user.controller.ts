import { Request, Response } from "express";
import { UserModel } from "../models/user.model"
import { userValidator } from "../validator/user.validator"
import { serverError, resourceError } from "../services/utils.service"

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const getAllUser = async (req: Request, res: Response) => {

    try {
        // pagination
        const { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } = process.env;
        const pageNumber: number = Number(req.query.pageNumber) || Number(DEFAULT_PAGE_NUMBER);
        const pageSize: number = Number(req.query.pageSize) || Number(DEFAULT_PAGE_SIZE)
        const skip = (pageNumber - 1) * pageSize

        const users = await UserModel.find().limit(pageSize).skip(skip);
        return res.status(200).json({ data: users });

    } catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const saveUser = async (req: Request, res: Response) => {

    try {
        const { name } = req.body;
        const validate = userValidator({ name });
        if (validate.isValid === false) {
            return res.status(400).json(validate.error);
        }

        const user = await UserModel.create({ name });
        return res.status(200).json({ success: true, user });
    }
    catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        const validate = userValidator({ name });
        if (validate.isValid === false) {
            return res.status(400).json(validate.error);
        }

        const user = await UserModel.findOneAndUpdate({ _id: id },
            {
                $set: { name }
            }
        );
        return res.status(200).json({ success: true, user });
    }
    catch (error: any) {
        serverError(res, error)
    }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export const deleteUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const user = await UserModel.deleteOne({ _id: id });
        return res.status(200).json({ success: true, user });
    }
    catch (error: any) {
        serverError(res, error)
    }
}