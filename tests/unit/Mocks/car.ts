import ICar from '../../../src/Interfaces/ICar';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput = {
  id: '63c6ddf10289a064e9c0b4c1',
  ...carInput,
};

const cars = [
  carOutput,
];

export { carInput, carOutput, cars };
