import mongoose from "mongoose"
import { passionLevel } from "./../validator/utils.validator";
const Schema = mongoose.Schema;

const hobbiesSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    passionLevel: {
        type: String,
        enum : passionLevel
    },
    year: Number

}, { collection: 'Hobbies' });

export const HobbiesModel = mongoose.model('Hobbies', hobbiesSchema);