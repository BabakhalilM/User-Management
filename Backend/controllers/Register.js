import user from "../models/UserModel.js";

export const register = async (req, res) => {
    try {
      const { firstname,lastname, email, password } = req.body;
      console.log("registration password", password);
  
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).send('Invalid request data');
      }
  

      const userExist = await user.findOne({ email });
  
      if (!userExist) {
        const data = new user({ firstname,lastname, email, password});
        await data.save();
        res.status(201).json({ msg: "Register successful", data });
      } else {
        res.status(400).send('User already exists, try to use other Details');
      }
    } catch (err) {
      console.error("error in register", err);
      res.status(500).send("Internal server error");
    }
  };

  export const users=async(req,res)=>{
    try{
      const usersData= await user.find();
      res.status(200).json({usersData});
    }catch(err){
      console.log("error in finding data",err);
      res.status(500).send("Internal server error");
    }
  }

  export const edituser= async (req, res) => {
    const { _id, firstname, lastname, email } = req.body;
    console.log(req.body);
    try {
      await user.findByIdAndUpdate(_id, { firstname, lastname, email });
      res.status(200).send({ message: 'User updated successfully' });
    } catch (err) {
      res.status(500).send({ error: 'Error updating user' });
    }
  };
  
  
  export const deleteuser= async (req, res) => {
    let id = req.params.id; 
        console.log("single user delete", id);
  
    if (id && id.startsWith(':')) {
      id = id.slice(1);  
    }
    try {
      const userdel= await user.findByIdAndDelete(id);
      console.log(userdel);
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: 'Error deleting user' });
    }
  };
  export const deleteusers = async (req, res) => {
    const { deleteUsers } = req.body; 
    console.log("IDs to delete:", deleteUsers);
  
    try {
      const result = await user.deleteMany({ _id: { $in: deleteUsers } });
  
      if (result.deletedCount > 0) {
        res.status(200).send({ message: 'Users deleted successfully', deletedCount: result.deletedCount });
      } else {
        res.status(404).send({ message: 'No users found with the given IDs' });
      }
    } catch (err) {
      console.log("Error deleting users:", err);
      res.status(500).send({ error: 'Error deleting users' });
    }
  };
