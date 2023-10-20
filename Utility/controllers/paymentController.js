const Payment = require("../models/paymentModel");

//Add a Payment
const addPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

//Get all Payments
const getPayments = async (req, res) => {
    try {
        const payment = await Payment.find();
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Get a single payment
const getPayment = async (req, res) => {

    try {
        const { id } = req.params;
        const payment = await Payment.findById(id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

//Delete a payment
const delPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByIdAndDelete(id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update Payment
const upPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByIdAndUpdate(
            {
                _id: id
            },
            req.body, {
            new: true,
            runValidators: true
        }
        )
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(payment);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}



module.exports = {
    addPayment,
    getPayments,
    getPayment,
    delPayment,
    upPayment
};