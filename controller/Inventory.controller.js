const Inventory = require("../models/Inventory.model");

// add item to inventory
const addInventory = async (req, res) => {
  const { itemId, itemName, itemCategory, quantity, location, shortage, note} =
    req.body;

  const inventory = new Inventory({
    itemId,
    itemName,
    itemCategory,
    quantity,
    location,
    shortage,
    note
  });

  await inventory
    .save()
    .then(() => res.json('Inventory added!'))
    .catch((error) => res.status(400).json("Error: " + error));
};

//get all inventory details
const getInventorys = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

//get inventory item details by id
const getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    res.json(inventory);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

//update inventory details
const updateInventory = async (req, res) => {
  Inventory.findByIdAndUpdate(req.params.id)
    .then((existingInventory) => {
      existingInventory.itemId = req.body.itemId;
      existingInventory.itemName = req.body.itemName;
      existingInventory.itemCategory = req.body.itemCategory;
      existingInventory.quantity = req.body.quantity;
      existingInventory.location = req.body.location;
      existingInventory.shortage = req.body.shortage;
      existingInventory.note = req.body.note;

      existingInventory
        .save()
        .then(() => res.json('Inventory updated!'))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Server Error: " + error));
};

//delete inventory details
const deleteInventory = async (req, res) => {
  Inventory.findByIdAndDelete(req.params.id)
    .then((deletedInventory) => {
      res.json('Inventory deleted');
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  addInventory,
  getInventorys,
  getInventoryById,
  updateInventory,
  deleteInventory
}

