import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Planet = new Schema(
  {
    title: { type: String, required: true },
    starId: { type: ObjectId, ref: "Star", required: true },
    galaxyId: { type: ObjectId, ref: "Galaxy", required: true },
    NumMoons: { type: Number },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;