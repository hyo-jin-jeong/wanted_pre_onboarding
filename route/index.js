import express from 'express';
import jobRouter from './job.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/jobs', jobRouter);
router.use('/users', userRouter);

export default router;