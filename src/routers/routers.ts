import { Router } from 'express';
import user from './user.router';

const router = Router();

router.use('/', user);

export default router;
