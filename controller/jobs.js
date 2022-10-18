import * as jobsRepository from '../model/jobs.js';

export async function registerJob(req, res) {
    const { companyId, position, compensation, contents, skill } = req.body;

    await jobsRepository.registerJob(
        companyId,
        position,
        compensation,
        contents,
        skill
    );

    res.status(200).send({ success: true });
}