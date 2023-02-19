// import FoodModel from './food_items';
// import FoodSchema from("./food_items") 
const mongoose = require ('mongoose')
// const FoodModel =require('./food_items')
const cartSchema = mongoose.Schema(
    {
        foodid:{
            type:String,
            // type:mongoose.Schema.Types.ObjectID,
            // ref:'food',
            // required:true,
            // path : '_id'
        },

        price:{
            // type:mongoose.Schema.Types.Number,
            type:Number,
            required:true,
            Path :'price'
        },
        image:{
            type:String,
            // ref:'image',
            // required:true,
        }
    }
);

const cartModel = mongoose.model("carts",cartSchema)
module.exports = cartModel;