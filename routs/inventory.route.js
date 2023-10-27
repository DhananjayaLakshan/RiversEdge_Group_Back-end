const express = require("express");
const router = express.Router();

const {
    addInventory,
    getInventorys,
    getInventoryById,
    updateInventory,
    deleteInventory
} = require("../controller/Inventory.controller");

  router.get("/", getInventorys);
  
  router.get("/:id", getInventoryById);
  
  router.post("/", addInventory);
  
  router.put("/:id", updateInventory);
  
  router.delete("/:id", deleteInventory);

  module.exports = router;
