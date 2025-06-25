import { Schema, model } from "mongoose";

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    image: {
        type: String,
        default: "http://google.com",
        required: true,
    }
}, { versionKey: false, timestamps: true });

const Genre = model("genre", GenreSchema);

export default Genre;