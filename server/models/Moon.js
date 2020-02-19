import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Moon = new Schema(
  {
    title: { type: String, required: true },
    planetId: { type: ObjectId, ref: "Planets", required: true },
    starId: { type: ObjectId, ref: "Stars", required: true },
    galaxyId: { type: ObjectId, ref: "Galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
