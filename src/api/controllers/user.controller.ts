import { NextFunction, Request, Response } from 'express';
import { ApiError, NotFoundError } from 'src/core/error/ApiError';
import { User } from '../models';
import * as userService from './../services/user.service';

const findByEmail = async (
  req: Request<User>,
  res: Response<User | ApiError>,
  next: NextFunction
) => {
  const user = await userService.findUserByEmail(req.body.email);

  if (!user) {
    return ApiError.handle(new NotFoundError(), res);
  }
  return res.status(200).json(user);
};

const register = async (req: Request, res: Response) => {
  console.log('chachicho', req, req.body);
  const user = await userService.saveOrUpdate(req.body);

  if (user) {
    return res.status(201).json(user);
  }

  return ApiError.handle(new NotFoundError(), res);
};

export default { register, findByEmail };
