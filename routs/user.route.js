const express = require("express");
const router = express.Router();

const {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require("../controller/User.controller");

router.get("/", getUsers);
router.get("/:id", getUserById);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", loginUser);

module.exports = router;