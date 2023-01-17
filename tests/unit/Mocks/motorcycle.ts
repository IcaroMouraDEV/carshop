import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutput = {
  id: '63c70736ec2688ce8febdca7',
  ...motorcycleInput,
};

const motorcycles = [
  motorcycleOutput,
];

export { motorcycleInput, motorcycleOutput, motorcycles };
