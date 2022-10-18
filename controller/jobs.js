import * as jobService from '../service/jobs.js';

import { NotFoundException } from '../util/exception/index.js';

async function registerJob(req, res) {
    const { companyId, position, compensation, contents, skill } = req.body;

    await jobService.registerJob(
        companyId,
        position,
        compensation,
        contents,
        skill
    );

    res.status(200).send({ success: true });
}

async function deleteJob(req, res) {
    const id = req.param('job_id');

    const job = await jobService.findById(id);
    if (!job) {
        throw new NotFoundException('잘못된 요청입니다.');
    }

    await jobService.deleteJob(id);
    res.status(200).send({ success: true });
}


export default {
    registerJob,
    deleteJob
} 