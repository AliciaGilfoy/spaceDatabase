import express from "express";
import galaxyService from "../services/GalaxyService";
import starService from "../services/StarService";
import planetService from "../services/PlanetService";
import moonService from "../services/MoonService"

export default class GalaxysController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoonsByGalaxy)
      .get("/:id/planets", this.getPlanetsByGalaxy)
      .get("/:id/stars", this.getStarsByGalaxy)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)


  }

  async getAll(req, res, next) {
    try {
      let data = await galaxyService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await galaxyService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getStarsByGalaxy(req, res, next) {
    try {
      let data = await starService.getByGalaxyId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByGalaxy(req, res, next) {
    try {
      let data = await planetService.getByGalaxyId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getMoonsByGalaxy(req, res, next) {
    try {
      let data = await moonService.getByGalaxyId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }


  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await galaxyService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await galaxyService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}