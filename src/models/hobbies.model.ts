import mongoose from "mongoose"
const Schema = mongoose.Schema;

const hobbiesSchema = new Schema({

    name: String,
    passionLevel: String,
    year: Number

});

export const HobbiesModel = mongoose.model('Hobbies', hobbiesSchema);