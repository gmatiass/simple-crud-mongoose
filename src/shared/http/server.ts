import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '../errors/AppError';
import dbConfig from '@config/db';
import mongoose from 'mongoose';

const app = express();

if (dbConfig.mongoDB.URL) {
  mongoose.connect(dbConfig.mongoDB.URL);
}

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Something went wrong.',
        message: error.message,
        errors: error.errors,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
