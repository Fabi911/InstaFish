import mongoose from "mongoose";

const { Schema } = mongoose;

const catchSchema = new Schema({
  date: String,
  location: String,
  species: String,
  size: Number,
  image: String,
  favorite: Boolean,
  weight: Number,
  notes: [String],
  author: String,
});

const Catches =
  mongoose.models.Catches || mongoose.model("Catches", catchSchema);

export default Catches;
