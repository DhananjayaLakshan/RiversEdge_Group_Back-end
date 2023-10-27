const express = require("express")
const router = express.Router()
const cus_feed = require("../models/CustomerFeedback.model");

//route for imsert data

router.post("/addfeedback" , async(req,res) => {
    //get all paras

    const firstName = req.body.firstName;
    const description = req.body.description

    const newFeedback = new cus_feed({
        firstName,
        description,
    })

    console.log(newFeedback);

    newFeedback.save().then(() => {
        res.json("Feedback Added")
    }).catch((err) => {
        console.log(err)
    })
})
// {  http://localhost:5000/api/feedback/addfeedback  }

//get all user feedbacks

router.route("/display").get((req,res) => {
    cus_feed.find().then((cus_feed) => {
        res.json(cus_feed);
    }).catch((err) => {
        console.log(err)
    })
})

// {    http://localhost:5000/api/feedback/display       }

module.exports = router