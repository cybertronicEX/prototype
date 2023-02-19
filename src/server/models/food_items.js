const mongoose = require ('mongoose');
// const { float } = require('webidl-conversions');
const FoodSchema 
= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    type:{
        type:String,
        required: true,
    },
    ingredients:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        required:true,
    },
    
});

const FoodModel = mongoose.model("foods",FoodSchema)
module.exports = FoodModel;
