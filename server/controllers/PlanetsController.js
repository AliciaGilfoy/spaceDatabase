import express from "express";
import planetService from "../services/PlanetService";
import moonService from "../services/MoonService";

export default class PlanetssController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoonsByPlanet)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)


  }

  async getAll(req, res, next) {
    try {
      let data = await planetService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await planetService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getMoonsByPlanet(req, res, next) {
    try {
      let data = await moonService.getByPlanetId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await planetService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await planetService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await planetService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}