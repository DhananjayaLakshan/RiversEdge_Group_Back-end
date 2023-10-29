const mongoose = require("mongoose")

const foodShema = mongoose.Schema({
    foodItem: {
        type:String,
        require:true
    },

    description : {
        type:String,
        require:true
    },

    img : {
        type:String,
        require:true
    },
    
    price: {
        type:String,
        require:true
    },

    category: {
        type:String,
        require:true
    }
})

const foodModel = mongoose.model("fooItems" , foodShema) 

module.exports = foodModel