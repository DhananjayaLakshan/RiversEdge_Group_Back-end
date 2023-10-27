const Employee = require("../models/Employee.model");

//add employee function
const addEmployee = async (req, res) => {
    const { firstName, lastName, empId, position, salary, gender, age, phoneNumber } =
        req.body;

    const employee = new Employee({
        firstName,
        lastName,
        empId,
        position,
        salary,
        gender,
        age,
        phoneNumber
    });

    console.log(employee);

    await employee
        .save()
        .then(() => res.json('Employee added!'))
        .catch((error) => res.status(400).json("Error: " + error));
};

// get all Employee
const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.json(employee);
    } catch (error) {
        res.status(500).send("Server Error (getAll): " + error);
    }
}

//get employee by id
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

const updateEmployee = async (req, res) => {
    Employee.findByIdAndUpdate(req.params.id)
        .then((existingEmployee) => {
            existingEmployee.firstName = req.body.firstName;
            existingEmployee.lastName = req.body.lastName;
            existingEmployee.empId = req.body.empId;
            existingEmployee.position = req.body.position;
            existingEmployee.salary = req.body.salary;
            existingEmployee.gender = req.body.gender;
            existingEmployee.age = req.body.age;
            existingEmployee.phoneNumber = req.body.phoneNumber;
            existingEmployee
                .save()
                .then(() => res.json('Employee updated!'))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//delete employee details
const deleteEmployee = async (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then((deletedEmployee) => {
            res.json('Employee deleted');
        })
        .catch((error) => res.status(400).json("Error: " + error));
};
//export 
module.exports = {
    addEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};