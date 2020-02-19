import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonService {
  async getByPlanetId(id) {
    return await _repository.find({ planetId: id })
  }
  async getByStarId(id) {
    return await _repository.find({ starId: id })
  }
  async getByGalaxyId(id) {
    return await _repository.find({ galaxyId: id });
  }
  async getAll() {
    return await _repository.find({})
      .populate("planetId", "title")
      .populate("starId", "title")
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

const moonService = new MoonService();
export default moonService;