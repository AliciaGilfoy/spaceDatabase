import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetService {
  async getByStarId(id) {
    return await _repository.find({ starId: id })
  }
  async getByGalaxyId(id) {
    return await _repository.find({ galaxyId: id });
  }
  async getAll() {
    return await _repository.find({})
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

const planetService = new PlanetService();
export default planetService;