const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/register", async(req,res) => {
    //get name,email,password from url
    const newUser = new User({
        firstName:      req.body.firstName, 
        lastName:       req.body.lastName,
        phoneNumber:    req.body.phoneNumber,
        email:          req.body.email, 
        password:       req.body.password
    })

    try {
        const user = await newUser.save()
        res.send('User Registration Successfully')
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.post("/login", async(req,res) => {
    const {email, password} =  req.body

try {
    const user = await User.findOne({email : email, password : password})// email and password checking

    //check user is exists
    if (user) {

        //filter result while fetching details except password
        const temp = {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            isAdmin: user.isAdmin,
            _id: user._id,
        }
        res.send(temp)
        
    }else{
        return res.status(400).json({message: 'Login failed'})
    }

} catch (error) {
    return res.status(400).json({error})
}

})

router.get("/getallusers" , async(req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error })
    }
})


router.post("/getUserById", async (req, res) => {

    const userid = req.body.userid

    try {
        const user = await User.findOne({ _id: userid })//it brings all rooms in mongoDB
        res.send(user)//if it success send rooms object
        
    } catch (error) {
        return res.status(400).json({ message: error })
    }

})

router.put("/updateUser/:userid", async (req,res) => {

    try {
        const userId = req.params.userid
        const { firstName, lastName, phoneNumber, email, password } = req.body
        
        

        // Construct the update object with provided data
        const updateData = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password, 
        }

        console.log(updateData);

        // Use a database library (e.g., Mongoose) to update the room in the database
        const updateUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true } // This ensures that the updated room is returned
        )

    if (!updateUser) {
            return res.status(404).json({ error: 'Room not found.' })
        }

        res.json(updateUser)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to update Room.' })
    }
})


module.exports = router

