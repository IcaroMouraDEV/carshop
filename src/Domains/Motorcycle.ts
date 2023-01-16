import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    const { id, model, year, color, status, buyValue } = motorcycle;

    super({ id, model, year, color, status, buyValue });
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}