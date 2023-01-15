import { Router } from 'express';
import CarController from '../Controllers/CarControllers';

const router = Router();

router.post('/cars', (req, res, next) => new CarController(req, res, next).create());

export default router;
