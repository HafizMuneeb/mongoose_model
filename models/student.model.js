import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 8,
            max: 25,
        },
        fatherName: {
            type: String,
            required: true,
            min: 10,
            max: 25
        },
        MotherName: {
            type: String,
            required: true,
            min: 10,
            max: 25,
        },
        DOB: {
            type: Number,
            required: true,
        },
        fatherOccupation: {
            type: String,
        },  
        motherOccupation: {
            type: String,
        },
        Address1: {
            type: String,
            required: true,
        },
        Address2: {
            type: String
        },
        PhoneNo: {
            type: Number,
            required: true,
            unigue: true
        },
        admittedClass: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        },
        RegisterNumber: {
            type: Number,
            required: true,
            unique: true
        },
        Gender: {
            type: String,
            enum: ["Male", "Female", "Others"]
        },
        studentImage: {
            type: []
        }
    }, 
    {timestamps: true}
);

export const Student = mongoose.model("Student", studentSchema);