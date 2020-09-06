import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import userRouter from './src/routes/userRoutes';
import thiefRouter from './src/routes/thiefRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import photoRouter from './src/routes/photoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRouter);
    this.app.use('/thief', thiefRouter);
    this.app.use('/tokens', tokenRouter);
    this.app.use('/photo', photoRouter);
  }
}

export default new App().app;
