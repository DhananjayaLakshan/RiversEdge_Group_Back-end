const User = require("../models/User.model");
const addUser = async (req, res) => {
    const { NIC, userRole,password } =
    req.body;

    const user = new User({
        NIC,
        userRole,
        password,
    });
    await user
    .save()
    .then(() => res.json('User added!'))
    .catch((error) => res.status(400).json("Error: " + error));
};

const loginUser = async (req, res) => {
    const { NIC, userRole,password } =
    req.body;
    try{

    const check = await User.collection.findOne(NIC)

    if(check){
            res.json(check)
        }
      }catch(e){
        res.json("notexist")
      }

  };

  const getUsers = async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateUser = async (req, res) => {
    User.findByIdAndUpdate(req.params.id)
      .then((existingUser) => {
        existingUser.NIC = req.body.NIC;
        existingUser.userRole = req.body.userRole;
        existingUser.password = req.body.password;
       
      
        
        existingUser
          .save()
          .then(() => res.json('User updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteUser = async (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then((deletedUser) => {
        res.json('User deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

    module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
   
  }