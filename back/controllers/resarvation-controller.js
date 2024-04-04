import ErrorHandler from "../error/error.js";
import { Resarvation } from "../models/resarvationasachema.js";

export const sendResarvation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill out all reservation details", 400));
    }

    try {
        await Resarvation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            time: time
        });

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully"
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(', '), 400));
        } else {
            return next(new ErrorHandler(error.message, 500)); // Handling other errors
        }
    }
};
