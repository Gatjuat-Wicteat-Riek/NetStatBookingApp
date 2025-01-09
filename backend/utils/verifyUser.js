import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import mongoose from "mongoose";
const secret_key = process.env.JWT_SECRET || "NetstatBookingApp"
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(errorHandler(401, "You are not authenticated!"));
    }

    jwt.verify(token, secret_key, (err, user) => {
        if (err) return next(errorHandler(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};

export const verifyUsers = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(errorHandler(400, "Invalid information"));
    }

    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(errorHandler(403, "You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(errorHandler(403, "You are not authorized!"));
        }
    });
};