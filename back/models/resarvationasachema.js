import mongoose from 'mongoose';
import validator from 'validator'

const reservationSchema = new mongoose.Schema({
    firstName : {
        type : String ,
        required : true ,
        minLength : [3 , "first name must contain at least 3 characters !"],
        maxLength : [30 , "First name cannot be more than 30 char "]
    },

    lastName : {
        type : String ,
        required : true ,
        minLength : [3 , "lastName must contain at least 3 characters !"],
        maxLength : [30 , "lastName cannot be more than 30 char "]
    },
    email : {
        type : String ,
        required : true ,
        validate : [validator.isEmail , "Provide a valid email"]
    }, 
    phone : {
        type : String ,
        required : true ,
    },
    time : {
        type : String ,
        required : true,
    },
    date : {
        type : String ,
        required : true,
    },
})
export const Resarvation = mongoose.model("Resarvation" , reservationSchema )