import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model = new CarModel();

  private static createCarDomain(car: ICar) {
    return new Car(car);
  }

  async create(car: ICar) {
    const result = await this.model.create(car);

    return CarService.createCarDomain(result);
  }
}