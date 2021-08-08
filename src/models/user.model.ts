import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobbies' }]

}, { collection: 'User' });

export const UserModel = mongoose.model('User', userSchema);