import { NextFunction, Request, Response } from 'express';
import errorMap from '../Utils/ErrorMap';

export default function ErrorHandler(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const { message, code } = errorMap(error.message);
  res.status(code).json({ message });
  next();
}