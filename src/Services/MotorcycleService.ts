import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotocycleModel';

export default class MotorcycleService {
  private model = new MotorcycleModel();

  private static createMotorcycleDomain(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  async findAll() {
    const moptorcycles = await this.model.findAll();

    return moptorcycles.map((motorcycle) => MotorcycleService.createMotorcycleDomain(motorcycle));
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

    const motorcycle = await this.model.findById(id);

    if (!motorcycle) throw new Error('Motorcycle not found');

    return MotorcycleService.createMotorcycleDomain(motorcycle);
  }

  async create(motorcycle: IMotorcycle) {
    const result = await this.model.create(motorcycle);

    return MotorcycleService.createMotorcycleDomain(result);
  }

  // async update(id: string, carData: ICar) {
  //   if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    
  //   const car = await this.model.findById(id);

  //   if (!car) throw new Error('Car not found');

  //   await this.model.update(id, carData);

  //   return CarService.createCarDomain({ ...carData, id });
  // }
}