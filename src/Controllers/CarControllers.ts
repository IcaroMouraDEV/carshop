import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async create() {
    try {
      const result = await this.service.create(this.req.body);
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async findAll() {
    try {
      const result = await this.service.findAll();   
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async findById() {
    try {
      const result = await this.service.findById(this.req.params.id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async update() {
    try {
      const result = await this.service.update(this.req.params.id, this.req.body);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}