const User = require("../models/User");

// exports.deleteUser=async(req,res)=>{

     

//      try {
//       const idToDelete = req.params.id;
//         console.log("req body", req.body);
//          const reponse=await User.findOneAndDelete({_id:idToDelete})
//           return res.status(200).json({
//             status: 201,
//             message: "User deleted successfully",
            
//           });
//         } catch (error) {
//           console.log("error", error);
//           return res.status(500).json({
//             status: 500,
//             message: error.message,
//           });
//         }

// }

// controllers/deleteController.js

// Assuming you have access to your data source (e.g., database), import necessary modules or models here.

// Controller function to handle the DELETE request
exports.deleteData = async (req, res) => {
  try {
    const idToDelete = req.params.id; // Access the "id" parameter from the request URL

    // Add your code here to delete the data with the specified ID from your data source.
    // For example, if you're using a database:
     await User.findByIdAndDelete(idToDelete);

    // Replace the above line with the appropriate code to delete data based on the provided ID.

    // Respond with a success message upon successful deletion
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    // If an error occurs during the DELETE request, handle it accordingly
    console.error('Error while deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data' });
  }
};
