import { Router } from 'express';
import CarController from '../Controllers/CarControllers';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).create());
router.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
router.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());
router.put('/cars/:id', (req, res, next) => new CarController(req, res, next).update());

router.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
router.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
router.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);
router.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default router;
