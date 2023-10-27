const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const inventoryOrdersSchema = new Schema({
    orderId :{type : String},
    date: { type: Date, required: true },
    supplier: {type :String},
    itemType : {type : String},
    requestedQuantity : {type : String},
    // status:{type : String}
},{
        timestamps : true,
});

const InventoryOrders = mongoose.model("InventoryOrders", inventoryOrdersSchema);
module.exports = InventoryOrders;