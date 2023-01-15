import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue } = car;

    super({ id, model, year, color, status, buyValue });
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}