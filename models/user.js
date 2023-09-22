import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    address: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    jobTitle: String,
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema);

export default User; 
