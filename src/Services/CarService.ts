import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model = new CarModel();
  private idError = 'Invalid mongo id';
  private notFound = 'Car not found';

  private static createCarDomain(car: ICar) {
    return new Car(car);
  }

  async findAll() {
    const cars = await this.model.findAll();

    return cars.map((car) => CarService.createCarDomain(car));
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) throw new Error(this.idError);

    const car = await this.model.findById(id);

    if (!car) throw new Error(this.notFound);

    return CarService.createCarDomain(car);
  }

  async create(car: ICar) {
    const result = await this.model.create(car);

    return CarService.createCarDomain(result);
  }

  async update(id: string, carData: ICar) {
    if (!isValidObjectId(id)) throw new Error(this.idError);
    
    const car = await this.model.findById(id);

    if (!car) throw new Error(this.notFound);

    await this.model.update(id, carData);

    return CarService.createCarDomain({ ...carData, id });
  }
}
