// Example model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchesSchema = new Schema({
  id: String,
  season: String,
  city: String,
  date: String,
  team1: String,
  team2: String,
  toss_winner: String,
  toss_decision: String,
  result: String,
  dl_applied: String,
  winner: String,
  win_by_runs: String,
  win_by_wickets: String,
  player_of_match: String,
  venue: String,
  umpire1: String,
  umpire2: String,
  umpire3: String
});

// matchesSchema.virtual("date").get(() => this._id.getTimestamp());

mongoose.model("matches", matchesSchema);
