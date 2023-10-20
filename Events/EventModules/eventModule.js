const mongoose = require("mongoose")

const eventShema = mongoose.Schema({
    
    eventName : {
        type:String,
        require:true
    },

    eventDate : {
        type:String,
        require:true
    },

    numOfTickets : {
        type:Number,
        require:true
    },

    ticketPrice : {
        type:Number,
        require:true
    },

    moreDetails : {
        type:String,
        require:true
    }
},{
    timestamps:true,
})

const eventModel = mongoose.model("Events" , eventShema) //Event Is Collection Name

module.exports = eventModel
