import Job from '../model/job.js';
async function registerJob(companyId, position, compensation, contents, skill) {
    const result = await Job.create({
        companyId,
        position,
        compensation,
        contents,
        skill,
    });
    return result.dataValues;
}

async function findById(id) {
    const result = await Job.findOne({ where: { id } });
    return result;
}

async function updateJob(id, updateData) {
    const result = await Job.update(updateData, { where: { id } })
    return result;
}

async function deleteJob(id) {
    await Job.destroy({ where: { id } });
}

export default {
    registerJob,
    findById,
    updateJob,
    deleteJob,
}