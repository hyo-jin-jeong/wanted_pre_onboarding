import * as jobService from '../service/jobs.js';

export async function registerJob(req, res) {
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

export async function deleteJob(req, res) {
    const id = req.param('job_id');

    const job = await jobService.findById(id);
    if (!job) {
        res.status(400).send({ message: '잘못된 요청입니다.' });
    }

    await jobService.deleteJob(id);
    res.status(200).send({ success: true });
}