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

export async function findById(id) {
    const result = await Job.findOne({ where: { id } });
    return result;
}

export async function deleteJob(id) {
    await Job.destroy({ where: { id } });
}