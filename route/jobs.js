import { body } from 'express-validator';
import express from 'express';
import jobController from '../controller/jobs.js';
import { validator } from '../middleware/validator.js';

const router = express.Router();

const validateRegisterJob = [
    body('companyId')
        .trim()
        .isInt()
        .withMessage('유효하지 않은 값입니다.'),
    body('position')
        .isLength({ min: 1, max: 50 })
        .withMessage('유효하지 않은 값입니다.'),
    body('compensation')
        .optional(true)
        .isInt()
        .withMessage('유효하지 않은 값입니다.'),
    body('skill')
        .isLength({ min: 1, max: 20 })
        .withMessage('유효하지 않은 값입니다.'),
    validator
];

router.post('/', validateRegisterJob, jobController.registerJob);
router.delete('/:job_id', jobController.deleteJob);
export default router;
