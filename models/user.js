const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName   : {type: String,require: true,},
    lastName    : {type: String,require: true,},
    phoneNumber : {type: Number,require: true,},
    email       : {type: String,require: true,},
    password    : {type: String,require: true,},
    isAdmin     : {type: Boolean,default: false}
}, {
    timestamps : true,
});

const userModel = mongoose.model('users', userSchema)
module.exports = userModel
