const express = require("express")
const router = express.Router()
const Res = require("../models/rest");


//router for data insert
router.post("/addevent" , async (req , res) => {
    //get All parameters from url

    const userName = req.body.userName;
    const userPhone = req.body.userPhone;
    const numOfTickets = Number(req.body.numOfTickets);
    const totalAmount = Number(req.body.totalAmount);
    //pass the values to the database

    const newRes = new Res({
        userName,
        userPhone,
        numOfTickets,
        totalAmount,
    })

    newRes.save().then(() => {
        res.json("Reservation Added")
    }).catch(() => {
        console.log("Err")
    })


})


//router for display data

router.route("/display").get((req,res) => {
    Res.find().then((Ress) => {
        res.json(Ress);
    }).catch((err) => {
        console.log(err)
    })
})

// router for delete event

router.route("/delete/:id").delete(async(req,res) => {
    try {
        
        //getthig id from the url
        let id = req.params.id;

        await Res.findByIdAndDelete(id);
        res.status(200).send({ status  : "Event Deleted"});

    } catch (error) {
        
        console.log(error);
        res.status(500).send({ status : "Internal Server Error"})
    }
})


module.exports = router