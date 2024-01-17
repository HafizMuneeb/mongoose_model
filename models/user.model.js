import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            min: ["6", "username must be at least 6 characters"],
            max:20
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        Mobile: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            min: ["6", "Password must be at least 6 characters long"],
            max: 12
        }
    }, 
    {timestamps:true}
);


export const User = mongoose.model("User", userSchema) 