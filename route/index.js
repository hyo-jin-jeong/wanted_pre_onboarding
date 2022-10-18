import express from 'express';
import jobRouter from './jobs.js';
import userRouter from './users.js';

const router = express.Router();

router.use('/jobs', jobRouter);
router.use('/users', userRouter);

export default router;