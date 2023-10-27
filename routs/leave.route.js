const express = require("express");
const router = express.Router();

const {
    addLeave,
    getLeave,
    getLeaveById,
    updateLeave,
    deleteLeave,
    updateStatus
} = require("../controller/Leave.controller");

router.get("/", getLeave);
router.get("/:id", getLeaveById);
router.post("/", addLeave);
router.put("/:id", updateLeave);
router.put("/status/:id", updateStatus);
router.delete("/:id", deleteLeave);

module.exports = router;