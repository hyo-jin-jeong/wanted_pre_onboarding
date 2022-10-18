import * as jobsController from '../controller/jobs.js';

import express from 'express';

const router = express.Router();

router.post('/', jobsController.registerJob);
export default router;