const express = require("express")
const router = express.Router()
const Event = require("../models/event");


//router for data insert
router.post("/addevent" , async (req , res) => {
    //get All parameters from url

    const eventName = req.body.eventName;
    const eventDate = req.body.eventDate;
    const numOfTickets = req.body.numOfTickets;
    const ticketPrice = req.body.ticketPrice;
    const moreDetails = req.body.moreDetails;
    //pass the values to the database

    const newEvent = new Event({
        eventName,
        eventDate,
        numOfTickets,
        ticketPrice,
        moreDetails,
    })

    console.log(eventName)

    newEvent.save().then(() => {
        res.json("Event Added")
    }).catch((err) => {
        console.log(err)
    })


})

// { http://localhost:5000/api/event/addevent }
//=========


//router for display data

router.route("/display").get((req,res) => {
    Event.find().then((Events) => {
        res.json(Events);
    }).catch((err) => {
        console.log(err)
    })
})

// { http://localhost:5000/api/event/display }
//=========

//get Events By Id
router.post("/geteventbyid" , async (req , res) => {
    
    const eventid = req.body.eventid

    try {
        const event = await Event.findOne({_id: eventid})
        res.send(event)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error})
    }
})

// { http://localhost:5000/api/event/geteventbyid } 
//============


//router for data update

router.route("/updateEvents/:id").put(async(req,res) => {
    try {
        
        //getthing user id
        let id = req.params.id

        //getting updated data fromm the body

        const {
            eventName,
            eventDate,
            numOfTickets,
            ticketPrice,
            moreDetails
        } = req.body;
        
        const updateEvent = {
            eventName,
            eventDate,
            numOfTickets,
            ticketPrice,
            moreDetails
        }

        const update = await Event.findByIdAndUpdate(id , updateEvent);

        if(update){
            res.status(200).json({ status: "Event Updated", updatedEvent: update });
        }else{
            res.status(404).json({ status: "Event not found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Internal Server Error" });
    }
})

// { http://localhost:5000/api/event/update/65314660cef50622281fefc0 }
//=======

// router for delete event

router.route("/delete/:id").delete(async(req,res) => {
    try {
        
        //getthig id from the url
        let id = req.params.id;

        await Event.findByIdAndDelete(id);
        res.status(200).send({ status  : "Event Deleted"});

    } catch (error) {
        
        console.log(error);
        res.status(500).send({ status : "Internal Server Error"})
    }
})

// { http://localhost:5000/api/event/delete/65314660cef50622281fefc0 }

//======================





module.exports = router