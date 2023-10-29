const express = require("express")
const router = express.Router()
const Food = require("../models/FoodItemModule")


//router for inser data

router.post("/addFood" , async (req, res) => {
    const foodItem = req.body.foodItem;
    const description = req.body.description;
    const img = req.body.img;
    const price = req.body.price;
    const category = req.body.category;

    const newFood = new Food ({
        foodItem,
        description,
        img,
        price,
        category
    })

    console.log(newFood)

    newFood.save().then(() => {
        res.json("Food Added")
    }).catch((err) => {
        console.log(err)
    })
})


// route for display food items

router.route("/display").get((req,res) => {
    Food.find().then((Foods) => {
        res.json(Foods);
    }).catch((err) => {
        console.log(err)
    })
})

// {  http://localhost:5000/api/foods/display  }

module.exports = router