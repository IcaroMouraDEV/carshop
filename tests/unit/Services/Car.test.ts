import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput, cars } from '../Mocks/car';

describe('Car service layer', function () {
  it('should be able to create a car', async function () {
    Sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarService();
    const newCar = await carService.create(carInput);

    expect(newCar).to.be.deep.equal(carOutput);
  });

  it('should be able to find all cars', async function () {
    Sinon.stub(Model, 'find').resolves(cars);

    const carService = new CarService();
    const findCars = await carService.findAll();

    expect(findCars).to.be.deep.equal([carOutput]);
  });

  it('should be able to find one car', async function () {
    Sinon.stub(Model, 'findOne').resolves(carOutput);

    const carService = new CarService();
    const findCar = await carService.findById(carOutput.id);

    expect(findCar).to.be.deep.equal(carOutput);
  });
  
  it('should be able to update a car', async function () {
    Sinon.stub(Model, 'findOne').resolves(carOutput);
    Sinon.stub(Model, 'updateOne').resolves();

    const carService = new CarService();
    const updateCar = await carService.update(carOutput.id, carOutput);

    expect(updateCar).to.be.deep.equal(carOutput);
  });

  it('should be not able to find a not existing car', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const carService = new CarService();
      await carService.findById(carOutput.id);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  it('should be not able to find a car with invalid mongo id', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const carService = new CarService();
      await carService.findById('tryber_tester');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  
  it('should be not able to update a not existing car', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const carService = new CarService();
      await carService.update(carOutput.id, carOutput);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  it('should be not able to update a car with invalid mongo id', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const carService = new CarService();
      await carService.update('tryber_tester', carOutput);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(Sinon.restore);
});