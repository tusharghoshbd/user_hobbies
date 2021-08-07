import { Request, Response } from "express";

export const serverError = (res: Response, error: any) => {
    return res.status(500).json({
        success: false,
        message: "Server error occurred",
        error
    });
}

export const resourceError = (res: Response, message: string, error: any) => {
    return res.status(500).json({
        success: false,
        message,
        error
    });
}