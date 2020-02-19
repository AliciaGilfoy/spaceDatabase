import express from "express";
import moonService from "../services/MoonService";

export default class MoonsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)


  }

  async getAll(req, res, next) {
    try {
      let data = await moonService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await moonService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await moonService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await moonService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await moonService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}