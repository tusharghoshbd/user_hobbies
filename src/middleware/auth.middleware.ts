import { Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: any) => {
    try {
        // Verify the token
        // If token is valid then call next(), otherwise return a unauthenticated error message
        // Just for the current situation, user authentication will be always true
        if (false) { // Check user is authenticated or not
            // to do
            // throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (error: any) {
        res.status(401).json({ error });
    }
}