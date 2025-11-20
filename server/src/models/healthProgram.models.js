import mongoose from "mongoose";

const HealthProgramSchema = new mongoose.Schema({
  title: String,
  description: String,
  interest: String,
  feature_text: String,
  region: String,
  type: String,
  age_min: Number,
  age_max: Number,
  score: Number,
  link: String,
  image_url: String
});

export default mongoose.model("HealthProgram", HealthProgramSchema);
