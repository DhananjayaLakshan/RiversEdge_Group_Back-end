const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    itemId : {type : String, unique : true,required : true},
    itemName: {type :String, required : true},
    itemCategory : {type : String, required : true},
    quantity : {type : String, required : true},
    location : {type : String, required : true},
    shortage : {type : Boolean, required : true},
    note : {type : String, required : false}
},{
        timestamps : true,
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;