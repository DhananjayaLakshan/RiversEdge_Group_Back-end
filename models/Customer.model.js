const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone1: { type: String, required: true },
    phone2: { type: String, required: false },
    address: { type: String,  required: true },
    email: { type: String,unique: true, required: true },
    country: { type: String, required: true },
    pass: { type: String, required: true },
    cPass: { type: String, required: true },
    role:{type: String, required: true}

}, {
    timestamps: true,
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;