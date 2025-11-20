import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema({
  id: String,
  title: String,
  type: String,
  age_min: Number,
  age_max: Number,
  interest: String,
  region: String,
  description: String,
  image_url: String,
  feature_text: String,
  score: Number,
  link: String,
  embedding: [Number],
});

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

export default Opportunity;
