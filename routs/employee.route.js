const express = require("express");
const router = express.Router();

const {
    addEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,

} = require("../controller/Employee.controller");

router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;