const User = require("../models/User");

exports.updateUser = async (req, res) => {
  try {
    const { State, Male ,Female,id} = req.body;
    console.log("req body", req.body);
    const NewUser = await User.findByIdAndUpdate({_id:id},{State:State,Male:Male,Female:Female});
      return res.status(200).json({
        status: 201,
        message: "User created successfully",
        data: State,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
};