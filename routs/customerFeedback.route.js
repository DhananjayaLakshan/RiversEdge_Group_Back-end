const express = require("express");
const router = express.Router();

const {
    addCustomerFeedBack,
    getCustomerFeedback,
    getCustomerFeedbackById,
    updateCustomerFeedback,
    deleteCustomerFeedback

} = require("../controller/CustomerFeedback.controller");

router.post("/", addCustomerFeedBack);
router.get("/", getCustomerFeedback);
router.get("/:id", getCustomerFeedbackById);
router.put("/:id", updateCustomerFeedback);
router.delete("/:id", deleteCustomerFeedback);

module.exports = router;