import mongoose from "mongoose";

const caterogySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
})

const Category = mongoose.model('Category', caterogySchema)