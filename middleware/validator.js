import { validationResult } from 'express-validator';

export const validator = (req, res, next) => {
    const error = validationResult(req);
    console.log(error)
    if (error.isEmpty()) {
        return next();
    }
    res.status(400).json({ message: error.array()[0].msg })
}