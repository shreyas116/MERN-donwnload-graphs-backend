const User = require("../models/User");
exports.getUser = async (req, res) => {
	try { 
		const {id}=req.body;
		const userData = await User.find();
		console.log(userData)
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
