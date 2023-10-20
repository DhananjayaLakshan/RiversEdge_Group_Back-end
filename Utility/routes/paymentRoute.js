const express = require('express');
const Payment = require('../models/paymentModel');
const { addPayment, getPayments, getPayment, delPayment, upPayment } = require('../controllers/paymentController');
const router = express.Router();



//Add a Payment
router.post('/', addPayment);

//Get all Payments
router.get('/', getPayments);

//Get a single payment
router.get('/:id', getPayment);

//Delete a payment
router.delete('/:id', delPayment);

//Update Payment
router.put('/:id', upPayment);

module.exports = router;