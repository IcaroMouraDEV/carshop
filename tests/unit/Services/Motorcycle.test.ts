import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleInput, motorcycleOutput, motorcycles } from '../Mocks/motorcycle';

describe('Motorcycle service layer', function () {
  it('should be able to create a motorcycle', async function () {
    Sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const motorcycleService = new MotorcycleService();
    const newMotorcycle = await motorcycleService.create(motorcycleInput);

    expect(newMotorcycle).to.be.deep.equal(motorcycleOutput);
  });

  it('should be able to find all motorcycles', async function () {
    Sinon.stub(Model, 'find').resolves(motorcycles);

    const motorcycleService = new MotorcycleService();
    const findMotorcycles = await motorcycleService.findAll();

    expect(findMotorcycles).to.be.deep.equal([motorcycleOutput]);
  });

  it('should be able to find one motorcycle', async function () {
    Sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

    const motorcycleService = new MotorcycleService();
    const findMotorcycle = await motorcycleService.findById(motorcycleOutput.id);

    expect(findMotorcycle).to.be.deep.equal(motorcycleOutput);
  });
  
  it('should be able to update a motorcycle', async function () {
    Sinon.stub(Model, 'findOne').resolves(motorcycleOutput);
    Sinon.stub(Model, 'updateOne').resolves();

    const motorcycleService = new MotorcycleService();
    const updateMotorcycle = await motorcycleService.update(motorcycleOutput.id, motorcycleOutput);

    expect(updateMotorcycle).to.be.deep.equal(motorcycleOutput);
  });

  it('should be not able to find a not existing motorcycle', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findById(motorcycleOutput.id);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('should be not able to find a motorcycle with invalid mongo id', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.findById('tryber_tester');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  
  it('should be not able to update a not existing motorcycle', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.update(motorcycleOutput.id, motorcycleInput);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('should be not able to update a motorcycle with invalid mongo id', async function () {
    Sinon.stub(Model, 'findOne').resolves(null);

    try {
      const motorcycleService = new MotorcycleService();
      await motorcycleService.update('tryber_tester', motorcycleOutput);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(Sinon.restore);
});