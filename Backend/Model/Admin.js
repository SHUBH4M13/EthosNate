import mongoose, { Schema } from "mongoose";

const AdminScehma = new Schema({

    Username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
    }

} , {timestamps : true})

const Admin = mongoose.model("Admin" , AdminScehma);

module.exports = AdminScehma;
//