const express = require("express")
const router = express.Router()
const Res = require("../EventModules/resModel")


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



//router for get by user id

router.post('/getresbyusername', async (req, res) => {
    const { username } = req.body;

    try {
        const restaurants = await Res.find({ userName: username });

        if (restaurants.length === 0) {
            return res.status(404).json({ message: 'No restaurants found for the provided username.' });
        }

        res.status(200).json(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching restaurants.' });
    }
});

module.exports = router