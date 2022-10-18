import * as jobsController from '../controller/jobs.js';

import { body } from 'express-validator';
import express from 'express';
import { validator } from '../middleware/validator.js';

const router = express.Router();

const validateRegisterJob = [
    body('companyId')
        .trim()
        .isInt()
        .withMessage('유효하지 않은 입력값입니다.'),
    body('position')
        .isLength({ min: 1, max: 50 })
        .withMessage('유효하지 않은 입력값입니다'),
    body('compensation')
        .isInt()
        .withMessage('유효하지 않은 입력값입니다'),
    body('skill')
        .isLength({ min: 1, max: 20 })
        .withMessage('유효하지 않은 입력값입니다'),
    validator
];

router.post('/', validateRegisterJob, jobsController.registerJob);
export default router;
