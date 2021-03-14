import express, { Request, Response } from 'express';
import cors from 'cors';
import { env } from './env';
import { ApiError, InternalError, NotFoundError } from './core/error/ApiError';
import router from './routers/routers';

const app = express();

app.use(cors({ origin: env.app.cors, optionsSuccessStatus: 200 }));

// Routes
app.use('/v1', router);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof ApiError) {
    return ApiError.handle(err, res);
  } else {
    if (env.node === 'development') {
      return res.status(500).send(err.message);
    }
    return ApiError.handle(new InternalError(), res);
  }
});

app.listen(env.app.port, () =>{
  console.info(`started on http://localhost:${env.app.port}/v1`);
  console.info(`started on ${env.node}`);
});

export default app;
