const express = require('express');
const cartModel = require('../models/cartmodel')

const router = express.Router();

const cors = require('cors');
// const FoodModel = require('../models/food_items');
// const { findOne } = require('../models/food_items');
// const { result } = require('lodash');
router.use(express.json());
router.use(cors());

router.get("/getCart", async (req,res)=>{
    cartModel.find({}, (err , result) =>{
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

router.post("/addCart", async (req, res)=>{
    const addcartitems = {foodid :req.body.foodid, price :req.body.price, image :req.body.image }
    // const addcartitems = await findOne({_id :req._id})
    const newAaddcartitems = new cartModel(addcartitems);
    await newAaddcartitems.save();
    res.json(addcartitems);
})

router.post("/deleteCart", async (req, res)=>{
    const id =req.body.foodid;
    try {
        let  filter = {"_id":foodid}
        
    await  cartModel.findByIdAndDelete(filter);
    }
    catch(err){
        console.log(err);
    }
        res.send("deleted");
    
})


module.exports = router;