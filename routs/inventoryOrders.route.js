const express = require("express");
const router = express.Router();

const {
    addInventoryOrders,
    getInventoryOrders,
    getInventoryOrdersById,
    updateInventoryOrders,
    deleteInventoryOrder,
    // updateStatus

} = require("../controller/InventoryOrders.controller");

router.get("/", getInventoryOrders);
router.get("/:id", getInventoryOrdersById);
router.post("/", addInventoryOrders);
router.put("/:id", updateInventoryOrders);
router.delete("/:id", deleteInventoryOrder);
//   router.put("/status/:id", updateStatus);

module.exports = router;