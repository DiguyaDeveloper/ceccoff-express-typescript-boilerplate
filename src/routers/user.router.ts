import express from 'express';
import { BadRequestError } from './../core/error/ApiError';
import { SuccessResponse } from './../core/response/ApiResponse';
import asyncHandler from '../core/utils/asyncHandler';

const userRouter = express.Router();

userRouter.get(
  '/test',
  asyncHandler(async (req, res) => {
    if (!req) throw new BadRequestError('User not registered');
    return new SuccessResponse('success').send(res);
  })
);
export default userRouter;
