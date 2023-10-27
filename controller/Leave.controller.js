const Leave = require("../models/Leave.model");

//create leave function
const addLeave = async (req, res) => {
    const { firstName, lastName, empId, position, fromD, toD, nod, reason, status } =
        req.body;

    const leave = new Leave({
        firstName,
        lastName,
        empId,
        position,
        fromD,
        toD,
        nod,
        reason,
        status
    });

    await leave
        .save()
        .then(() => res.json('Leave Created!'))
        .catch((error) => res.status(400).json("Error: (create)" + error));
};

// get all Leaves
const getLeave = async (req, res) => {
    try {
        const leave = await Leave.find();
        res.json(leave);
    } catch (error) {
        res.status(500).send("Server Error (getAll): " + error);
    }
}

//get Leave by id
const getLeaveById = async (req, res) => {
    try {
        const leave = await Leave.findById(req.params.id);
        res.json(leave);
    } catch (error) {
        res.status(500).send("Server Error (getbId):" + error);
    }
};

//update leave details
const updateLeave = async (req, res) => {
    Leave.findByIdAndUpdate(req.params.id)
        .then((existingLeave) => {
            existingLeave.firstName = req.body.firstName;
            existingLeave.lastName = req.body.lastName;
            existingLeave.empId = req.body.empId;
            existingLeave.position = req.body.position;
            existingLeave.fromD = Date.parse(req.body.fromD);
            existingLeave.toD = Date.parse(req.body.toD);
            existingLeave.nod = req.body.nod;
            existingLeave.reason = req.body.reason;
            existingLeave.status = req.body.status;
            existingLeave
                .save()
                .then(() => res.json('Leave updated!'))
                .catch((error) => res.status(400).json("Error: (update)" + error));
        })
        .catch((error) => res.status(400).json("Error: (update)" + error));
};

//delete leave details
const deleteLeave = async (req, res) => {
    Leave.findByIdAndDelete(req.params.id)
        .then((deletedLeave) => {
            res.json('Leave record deleted');
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

const updateStatus = async (req, res) => {
    Leave.findByIdAndUpdate(req.params.id)
        .then((existingLeave) => {
            existingLeave.status = req.body.status;
            existingLeave
                .save()
                .then(() => res.json('Leave Status updated!'))
                .catch((error) => res.status(400).json("Error: (update)" + error));
        })
        .catch((error) => res.status(400).json("Error: (update)" + error));
};

module.exports = {
    addLeave,
    getLeave,
    getLeaveById,
    updateLeave,
    deleteLeave,
    updateStatus
}