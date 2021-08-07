import { Request, Response } from "express";
import { UserModel } from "../models/user.model"
import { serverError, resourceError } from "../services/utils.service"

export const getAllUser = async (req: Request, res: Response) => {

    try {

        const users = await UserModel.find();
        return res.status(200).json({ data: users });

    } catch (error: any) {
        serverError(res, error)
    }

}

export const saveUser = (req: Request, res: Response) => {
    console.log(req.body);

    return res.status(200).json({
        data: {
            api: "saveUser"
        },
        success: true
    });
}