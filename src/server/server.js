const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const FoodModel = require('./models/food_items');
// const { Result } = require('postcss');

// require('dotenv').config();

const app =  express();
// const port = process.env.port || 5000;
mongoose.connect("mongodb+srv://cyberx:1234567a@cluster0.hfti6w2.mongodb.net/Resturant?retryWrites=true&w=majority");

app.use(cors());
app.use(express.json());

app.get("/getFood", (req, res)=> {
    FoodModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

}) 

app.post("/addfood", async (req, res) => {
    const food = req.body
    const newFood = new FoodModel(food); 
    await newFood.save();

    res.json(food);
})

app.listen(3001, () =>{
    console.log('Server is running okay on port' );
});