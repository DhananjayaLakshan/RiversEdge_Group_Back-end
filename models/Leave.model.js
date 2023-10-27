const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    empId: { type: String },
    position: { type: String},
    fromD: { type: Date },
    toD: { type: Date },
    nod: { type: String },
    reason: { type: String },
    status: { type: String },

}, {
    timestamps: true,
});

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;