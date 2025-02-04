import { NextFunction, Request, Response } from "express";
import { findUserByToken } from "../services/auth.service";
import { User } from "@prisma/client";

declare global {
    namespace Express {
        interface Request {
            currentUser?: Omit<User, "password">;
        }
    }
}

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    let accessToken = req.headers.authorization;
    // remove Bearer from token
    accessToken = accessToken?.split(" ")[1];
    try {
        if (!accessToken) {
            return res.status(401).json({ message: "Access denied, token missing!" });
        }
        const existingUser = await findUserByToken(accessToken);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        req.currentUser = existingUser;
        next();
    } catch (error) {
        console.log(`Error:  ${error}`);
        res.status(500).json({ message: "Internal server error during authentication" });
    }
};

export { authenticate };