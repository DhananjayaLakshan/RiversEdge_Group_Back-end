const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({


    type: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    }



},
    {
        timestamps: true
    })

const payment = mongoose.model('payment', PaymentSchema)

module.exports = payment

