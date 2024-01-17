import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
    type: String,
    enum: ["A", "B", "C"]
})

const classSchema = new mongoose.Schema(
    {
        class: {
            type: String,
            enum: ["PG", "Nur", "Prep", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "PreNine"],
            required: true
        },
        craetedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        section: {
            type: [sectionSchema],
            required: true
        }
    }, 
    {timestamps: true}
);

export const Class = mongoose.model("Class", classSchema)