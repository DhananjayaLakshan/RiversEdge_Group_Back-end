const Customer = require("../models/Customer.model");

//Add new customer
const addCustomer = async (req, res) => {
    const { firstName, lastName, phone1, phone2, address, email, country, pass, cPass,role } = req.body;

    const customer = new Customer({
        firstName,
        lastName,
        phone1,
        phone2,
        address,
        email,
        country,
        pass,
        cPass,
        role
    });

    await customer
        .save()
        .then(() =>
            res.json('Customer created!'),
            console.log(customer)
        )
        .catch((error) => res.status(400).json("Error: " + error));
};

//Get all customers list
const getCustomers = async (req, res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
        console.log(customer);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Get customer details by id
const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
        console.log(customer);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Update customer details
const updateCustomer = async (req, res) => {
    Customer.findByIdAndUpdate(req.params.id)
        .then((existingCustomer) => {
            existingCustomer.firstName = req.body.firstName;
            existingCustomer.lastName = req.body.lastName;
            existingCustomer.phone1 = req.body.phone1;
            existingCustomer.phone2 = req.body.phone2;
            existingCustomer.address = req.body.address;
            existingCustomer.email = req.body.email;
            existingCustomer.country = req.body.country;
            existingCustomer.pass = req.body.pass;
            existingCustomer.cPass = req.body.cPass;
            existingCustomer.role = req.body.role;

            existingCustomer
                .save()
                .then(() => res.json('Customer update success!'))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//Delete customer details
const deleteCustomer = async (req, res) => {
    Customer.findByIdAndDelete(req.params.id)
        .then((deletedCustomer) => {
            res.json('Customer deleted');
            console.log(req.params.id)
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//export customer controller functions 
module.exports = {
    addCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
}