import { body } from 'express-validator';
import express from 'express';
import jobController from '../controller/job.js';
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


const validateUpdateJob = [
    body('companyId')
        .isEmpty()
        .withMessage('잘못된 요청입니다.'),
    body('position')
        .optional(true)
        .isString()
        .withMessage('유효하지 않은 값입니다.'),
    body('compensation')
        .optional(true)
        .isInt()
        .withMessage('유효하지 않은 값입니다.'),
    body('skill')
        .optional(true)
        .isString()
        .withMessage('유효하지 않은 값입니다.'),
    validator
]

const validateApplyJob = [
    body('userId')
        .trim()
        .isInt()
        .withMessage('유효하지 않은 값입니다.'),
    body('jobId')
        .trim()
        .isInt()
        .withMessage('유효하지 않은 값입니다.'),
    validator
];

router.post('/', validateRegisterJob, jobController.registerJob);
router.patch('/:id', validateUpdateJob, jobController.updateJob);
router.delete('/:id', jobController.deleteJob);
router.get('/:id', jobController.getJob);
router.get('/', jobController.getJobs);
router.post('/appliment', validateApplyJob, jobController.applyJob);

export default router;
