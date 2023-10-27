const express = require("express");
const router = express.Router();

const {
    addCustomer,
    getCustomers,
    updateCustomer,
    getCustomerById,
    deleteCustomer

} = require("../controller/Customer.controller");

router.post("/", addCustomer);
router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;