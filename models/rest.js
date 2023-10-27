const mongoose = require("mongoose")

const resShema = mongoose.Schema ({
    
    userName : {
        type : String,
        require : true
    },

    userPhone : {
        type : String,
        require : true
    },

    numOfTickets : {
        type : Number,
        require : true
    },

    totalAmount : {
        type : Number,
        require : true
    }
})

const resModel = mongoose.model("eventReservations" , resShema);
module.exports = resModel;