// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   State: {
//     type: String,
//     required: true,
	
// 	unique: true,
//   },
//   Male: {
//     type: Number,
//     required: true,
//     index: false, // Ensure this option is set to false
//   },
//   Female: {
//     type: Number,
//     required: true,
//     index: false, // Ensure this option is set to false
//   },
  
// },
// {
//     // Define the collation option for case-insensitive comparisons
//     collation: { locale: "en", strength: 2 },
//   }
//   );


//   userSchema.index({ State: 1 }, { unique: true, collation: { locale: "en", strength: 1 } });
//   userSchema.statics.findByState = function (state) {
//   return this.findOne({ State: { $regex: new RegExp(state, "i") } }).collation({ locale: "en", strength: 1 });
// };
// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  State: {
    type: String,
    required: true,
    unique: true,
  },
  Male: {
    type: Number,
    required: true,
    index: false,
  },
  Female: {
    type: Number,
    required: true,
    index: false,
  },
});

// Pre-save hook to convert the "State" field to lowercase
userSchema.pre("save", function (next) {
  if (this.isModified("State")) {
    this.State = this.State.toLowerCase();
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

