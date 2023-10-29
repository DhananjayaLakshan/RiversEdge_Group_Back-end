const express = require("express")
const router = express.Router()
const Order = require("../models/orderFoodModule")

//router for insert data

router.post("/addorder" , async (req,res) => {

    //get all paramenters  from url 
    const userId = req.body.userId;
    const userName = req.body.userName;
    const foodItem = req.body.foodItem;
    const itemPrice = req.body.itemPrice;
    const quantity =req.body.quantity;
    const totalPrice = req.body.totalPrice;
    const status = "Confirmed";

    const newOrder = new Order({
        userId,
        userName,
        foodItem,
        itemPrice,
        quantity,
        totalPrice,
        status,
    })

    console.log(newOrder);

    newOrder.save().then(() => {
        res.json("order Added")
    }).catch((err) => {
        console.log(err)
    })
    
})

// {   http://localhost:5000/api/order/addorder   }

//router for display data

router.get("/display", async (req, res) => {
    try {

        const order = await Order.find({}).sort({ createdAt: -1 })//it brings all order in mongoDB
        res.send(order)//if it success send rooms object

    } catch (error) {
        
        return res.status(400).json({ message: error })
    }
})

// {   http://localhost:5000/api/order/display      }

//router for data update

router.route("/updateOrder/:id").put(async(req,res) => {

    try{
        let id = req.params.id

        //getting updated data from the body

        const {
            userId,
            foodItem,
            itemPrice,
            quantity,
            totalPrice,
            status
        } = req.body;

        const updateOrder = {
            userId,
            foodItem,
            itemPrice,
            quantity,
            totalPrice,
            status
        }

        const update = await Order.findByIdAndUpdate(id , updateOrder);

        if(update){
            res.status(200).json({ status: "Order Updated", updateOrder: update });
        }else{
            res.status(404).json({ status: "Order not found" });
        }

    } catch(err){
        console.log(err);
        res.status(500).json({ status: "Internal Server Error" });
    }
})

// { http://localhost:5000/api/order/updateOrder/653d3a676a62f9c00438c6f5  }


//route for delete data

router.route("/delete/:id").delete(async(req,res) => {

    try{
        //getthig id from the url
        let id = req.params.id;

        await Order.findByIdAndDelete(id);
        res.status(200).send({ status  : "Order Deleted"});
    }catch(err){
        console.log(error);
        res.status(500).send({ status : "Internal Server Error"})
    }
})

// {   http://localhost:5000/api/order/delete/653d3a676a62f9c00438c6f5  }

//get order by id
router.post("/getorderbyid" , async (req , res) => {
    
    const orderid = req.body.orderid

    try {
        const order = await Order.findOne({_id: orderid})
        res.send(order)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error})
    }
})

// {  http://localhost:5000/api/order/getorderbyid       }

//get order by user id


router.post("/getorderbyuserid" , async (req , res) => {
    
    const userid = req.body.userid

    try {
        const order = await Order.find({userId: userid})
        res.send(order)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error})
    }
})




module.exports = router