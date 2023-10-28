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

router.post("/getFeedbackByName", async (req, res) => {

    const firstName = req.body.firstName

    try {
        const feedBack = await cus_feed.find({ firstName: firstName })//it brings all rooms in mongoDB
        res.send(feedBack)//if it success send rooms object

    } catch (error) {
        return res.status(400).json({ message: error })
    }

})

router.post("/getfeedbackbyid", async (req, res) => {

    const id = req.body.id

    try {
        const feedback = await cus_feed.findOne({ _id: id })//it brings all rooms in mongoDB
        res.send(feedback)//if it success send rooms object
        
    } catch (error) {
        return res.status(400).json({ message: error })
    }

})

router.delete("/deleteFeedback/:id", async (req, res) => {

    const id = req.params.id // Use req.params to access the roomID from the URL

    try {
        const feedback = await cus_feed.findOneAndDelete({ _id: id })

        if (feedback) {
            res.send('feedback are deleted')
        } else {
            res.status(404).json({ error: 'feedback not found' })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal server error' })
    }
})


router.put("/updateFeedBack/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const description= req.body.description;

        

        const updatedFeedback = await cus_feed.findByIdAndUpdate(
            id,
            { description: description },
            { new: true } 
        );

        if (!updatedFeedback) {
            return res.status(404).json({ error: 'Feedback not found.' });
        }
        res.json(updatedFeedback);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update feedback.' });
    }
});

module.exports = router