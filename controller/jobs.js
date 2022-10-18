import { NotFoundException } from '../util/exception/index.js';
import jobService from '../service/jobs.js';

async function registerJob(req, res) {
    const { companyId, position, compensation, contents, skill } = req.body;

    await jobService.registerJob(
        companyId,
        position,
        compensation,
        contents,
        skill
    );

    res.status(201).send({ message: 'success' });
}

async function deleteJob(req, res) {
    const id = req.param('job_id');

    const job = await jobService.findById(id);
    if (!job) {
        throw new NotFoundException('잘못된 요청입니다.');
    }

    await jobService.deleteJob(id);
    res.status(200).send({ message: 'success' });
}

async function updateJob(req, res) {
    const id = req.param('job_id');
    const updateData = req.body;

    const job = await jobService.findById(id);
    if (!job) {
        throw new NotFoundException('잘못된 요청입니다.');
    }

    await jobService.updateJob(id, updateData);

    res.status(200).send({ message: 'success' });
}


export default {
    registerJob,
    deleteJob,
    updateJob
} 