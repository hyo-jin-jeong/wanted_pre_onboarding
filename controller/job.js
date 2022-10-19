import { NotFoundException } from '../util/exception/index.js';
import jobService from '../service/job.js';

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

async function getJobs(req, res) {
    const searchKeyword = req.query?.search;
    const jobs = await jobService.getJobs(searchKeyword);

    const result = jobs.map((job) => {
        const { id, position, compensation, skill, Company } = job;

        return {
            id,
            position,
            compensation,
            skill,
            companyName: Company.name,
            region: Company.region,
            country: Company.country,
        }
    });

    res.status(200).send(result);
}

async function getJob(req, res) {
    const jobId = req.param('id');

    const job = await jobService.getJob(jobId);

    if (!job) {
        throw new NotFoundException('잘못된 요청입니다.');
    }

    const jobIds = await jobService.getJobIdByCompanyId(jobId, job.companyId);

    const { id, position, content, compensation, skill, Company } = job;
    const result = {
        id,
        position,
        compensation,
        skill,
        content,
        companyName: Company.name,
        region: Company.region,
        country: Company.country,
        otherJobs: jobIds.map((job) => job.id)
    }

    res.status(200).send(result);
}

export default {
    registerJob,
    deleteJob,
    updateJob,
    getJobs,
    getJob
} 