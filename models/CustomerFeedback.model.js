const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerFeedbackSchema = new Schema({
    firstName: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});

const CustomerFeedback = mongoose.model("CustomerRequrst", customerFeedbackSchema);
module.exports = CustomerFeedback;