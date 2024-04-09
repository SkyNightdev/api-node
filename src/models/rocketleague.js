import mongoose from "mongoose";
const { Schema, model } = mongoose;

const carSchema = new Schema({
  brand: String,
  model: String,
});

export default model("Car", carSchema);
