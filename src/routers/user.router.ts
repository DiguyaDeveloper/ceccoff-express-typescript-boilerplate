import express, { Request, Response } from 'express';
import { BadRequestError } from './../core/error/ApiError';
import asyncHandler from '../core/utils/asyncHandler';
import UserController from './../api/controllers/user.controller';

const userRouter = express.Router();

userRouter.post(
  '/register',
  asyncHandler(async (req: Request, res: Response) => {
    if (!req) throw new BadRequestError('Bad request');
    return await UserController.register(req, res);
  })
);

export default userRouter;
