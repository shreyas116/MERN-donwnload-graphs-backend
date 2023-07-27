const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { State, Male, Female } = req.body;
    if (!State || !Male || !Female ) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const newUser = new User({
      State,
      Male,
      Female,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: savedUser,
    });
  } catch (error) {
    
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
