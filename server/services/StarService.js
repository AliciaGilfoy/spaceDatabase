import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarService {
  async getByGalaxyId(id) {
    return await _repository.find({ galaxyId: id });
  }

  async getAll() {
    return await _repository.find({})
      .populate("galaxyId", "title");
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const starService = new StarService();
export default starService;