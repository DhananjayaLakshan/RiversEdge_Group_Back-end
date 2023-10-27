const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, required: true },
    empId: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    phoneNumber: { type: String, required: true }
}, {
    timestamps: true,

});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;