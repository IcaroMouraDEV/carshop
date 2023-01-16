import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotocycleModel';

export default class MotorcycleService {
  private model = new MotorcycleModel();

  private static createMotocycleDomain(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  // async findAll() {
  //   const cars = await this.model.findAll();

  //   return cars.map((car) => MotorcycleService.createCarDomain(car));
  // }

  // async findById(id: string) {
  //   if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

  //   const car = await this.model.findById(id);

  //   if (!car) throw new Error('Car not found');

  //   return CarService.createCarDomain(car);
  // }

  async create(motorcycle: IMotorcycle) {
    const result = await this.model.create(motorcycle);

    return MotorcycleService.createMotocycleDomain(result);
  }

  // async update(id: string, carData: ICar) {
  //   if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    
  //   const car = await this.model.findById(id);

  //   if (!car) throw new Error('Car not found');

  //   await this.model.update(id, carData);

  //   return CarService.createCarDomain({ ...carData, id });
  // }
}