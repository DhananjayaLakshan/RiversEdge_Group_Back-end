const InventoryOrders = require("../models/InventoryOrders.model");

// add item to inventory
const addInventoryOrders = async (req, res) => {
    const { orderId, date, supplier, itemType, requestedQuantity } = req.body;

    const inventoryOrders = new InventoryOrders({
        orderId,
        date,
        supplier,
        itemType,
        requestedQuantity,
    });

    await inventoryOrders
        .save()
        .then(() => res.json('Inventory Order added!'))
        .catch((error) => res.status(400).json("Error: " + error));
};

//get all inventory details
const getInventoryOrders = async (req, res) => {
    try {
        const inventoryOrders = await InventoryOrders.find();
        res.json(inventoryOrders);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get inventory item details by id
const getInventoryOrdersById = async (req, res) => {
    try {
        const inventoryOrders = await InventoryOrders.findById(req.params.id);
        res.json(inventoryOrders);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//update inventory details
const updateInventoryOrders = async (req, res) => {
    InventoryOrders.findByIdAndUpdate(req.params.id)
        .then((existingInventoryOrders) => {
            existingInventoryOrders.orderId = req.body.orderId;
            existingInventoryOrders.date = Date.parse(req.body.date);
            existingInventoryOrders.supplier = req.body.supplier;
            existingInventoryOrders.itemType = req.body.itemType;
            existingInventoryOrders.requestedQuantity = req.body.requestedQuantity;
            existingInventoryOrders
                .save()
                .then(() => res.json('Inventory Order updated!'))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Server Error: " + error));
};

//delete inventory details
const deleteInventoryOrder = async (req, res) => {
    InventoryOrders.findByIdAndDelete(req.params.id)
        .then((deletedInventoryOrder) => {
            res.json('Inventory Order deleted');
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
    addInventoryOrders,
    getInventoryOrders,
    getInventoryOrdersById,
    updateInventoryOrders,
    deleteInventoryOrder,
  }