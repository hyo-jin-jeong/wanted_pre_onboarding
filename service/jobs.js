import Job from '../model/jobs.js';
export async function registerJob(companyId, position, compensation, contents, skill) {
    const result = await Job.create({
        companyId,
        position,
        compensation,
        contents,
        skill,
    });
    return result.dataValues;
}