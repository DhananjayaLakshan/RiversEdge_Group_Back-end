const mongoose = require("mongoose")

const foodOrderShema = mongoose.Schema({

    userId : {
        type : String,
        require : true
    },

    userName : {
        type : String,
        require : true
    },

    foodItem : {
        type : String,
        require : true
    },

    itemPrice : {
        type : Number,
        require : true
    },

    quantity : {
        type : Number,
        require : true
    },

    totalPrice : {
        type : Number,
        require : true
    },

    status : {
        type:String,
        require : true
    }
}, {
    timestamps: true,
})

const foodModel = mongoose.model("Orders" , foodOrderShema)

module.exports = foodModel