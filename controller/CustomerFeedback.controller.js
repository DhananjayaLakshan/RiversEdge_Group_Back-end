const CustomerFeedback = require("../models/CustomerFeedback.model");

//Add new customer feedback
const addCustomerFeedBack = async (req, res) => {
    const { firstName, description } = req.body;

    const customerFeedback = new CustomerFeedback({
        firstName,
        description
    });

    await customerFeedback
        .save()
        .then(() =>
            res.json('Feedback created!'),
            console.log(customerFeedback)
        )
        .catch((error) => res.status(400).json("Error: " + error));
};

//Get all feedback list
const getCustomerFeedback = async (req, res) => {
    try {
        const customerFeedback = await CustomerFeedback.find();
        res.json(customerFeedback);
        console.log(customerFeedback);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Get customer feedback by id
const getCustomerFeedbackById = async (req, res) => {
    try {
        const customerFeedback = await CustomerFeedback.findById(req.params.id);
        res.json(customerFeedback);
        console.log(customerFeedback);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Update customer feedback
const updateCustomerFeedback = async (req, res) => {
    CustomerFeedback.findByIdAndUpdate(req.params.id)
        .then((existingCustomerFeedback) => {
            existingCustomerFeedback.firstName = req.body.firstName;
            existingCustomerFeedback.description = req.body.description;
            existingCustomerFeedback
                .save()
                .then(() => res.json('Customer feedback update success!'))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//Delete customer feedback
const deleteCustomerFeedback = async (req, res) => {
    CustomerFeedback.findByIdAndDelete(req.params.id)
        .then((deletedCustomerFeedback) => {
            res.json('Customer feedback deleted');
            console.log(req.params.id)
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//export customer controller functions 
module.exports = {
    addCustomerFeedBack,
    getCustomerFeedback,
    getCustomerFeedbackById,
    updateCustomerFeedback,
    deleteCustomerFeedback
}