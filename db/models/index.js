import mongoose from "mongoose";

const { Schema } = mongoose;

const catchSchema = new Schema({
  date: { type: String, required: true },
  location: { type: String, required: true },
  species: { type: String, required: true },
  size: { type: Number },
  weight: { type: Number, required: true },
  image: { type: String },
  favorite: { type: Boolean },
  notes: { type: [String] },
  author: { type: String },
  methode: { type: String },
  bait: { type: String },
});

const Catch = mongoose.models.Catch || mongoose.model("Catch", catchSchema);

export default Catch;
