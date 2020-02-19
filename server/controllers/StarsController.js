import express from "express";
import starService from "../services/StarService";
import planetService from "../services/PlanetService";
import moonService from "../services/MoonService";

export default class StarsController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoonsByStar)
      .get("/:id/planets", this.getPlanetsByStar)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)


  }

  async getAll(req, res, next) {
    try {
      let data = await starService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await starService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByStar(req, res, next) {
    try {
      let data = await planetService.getByStarId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getMoonsByStar(req, res, next) {
    try {
      let data = await moonService.getByStarId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await starService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await starService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await starService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}