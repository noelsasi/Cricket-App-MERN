// Example model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  favTeam: String
});

usersSchema.virtual("date").get(() => this._id.getTimestamp());

mongoose.model("users", usersSchema);
