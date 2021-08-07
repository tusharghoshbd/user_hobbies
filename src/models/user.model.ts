import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({

    name: String,
    hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobbies' }]

}, { collection: 'User' });

export const UserModel = mongoose.model('User', userSchema);