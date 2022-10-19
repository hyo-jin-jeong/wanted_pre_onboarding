import Company from '../model/company.js';
import Job from '../model/job.js';
import { Op } from 'sequelize';

async function registerJob(companyId, position, compensation, contents, skill) {
    await Job.create({
        companyId,
        position,
        compensation,
        contents,
        skill,
    });
}

async function findById(id) {
    return await Job.findOne({
        attributes: [
            'id',
            'position',
            'compensation',
            'content',
            'skill',
            'companyId'
        ], where: { id }
    });
}

async function updateJob(id, updateData) {
    await Job.update(updateData, { where: { id } })
}

async function deleteJob(id) {
    await Job.destroy({ where: { id } });
}

async function getJobs(searchKeyword) {
    const likeSyntax = { [Op.like]: `%${searchKeyword}%` };
    const whereSyntax = searchKeyword ? {
        [Op.or]: [
            { skill: likeSyntax },
            { position: likeSyntax },
            { [`$Company.name$`]: likeSyntax },
            { [`$Company.region$`]: likeSyntax },
            { [`$Company.country$`]: likeSyntax }
        ]
    } : '';

    return await Job.findAll({
        attributes: ["id", "compensation", "position", "skill"],
        include: [{
            model: Company,
            as: 'Company',
            attributes: ["name", "region", "country"],
            required: true
        }], where: whereSyntax
    });
}

async function getJob(id) {
    return await Job.findOne({
        attributes: [
            "id",
            "companyId",
            "position",
            "compensation",
            "skill",
            "content",
        ],
        include: 'Company',
        where: { id }
    });
}

async function getJobIdByCompanyId(id, companyId) {
    return await Job.findAll({
        attributes: ["id"],
        where: { [Op.and]: { companyId, id: { [Op.ne]: id } } }
    });
}

export default {
    registerJob,
    findById,
    updateJob,
    deleteJob,
    getJobs,
    getJob,
    getJobIdByCompanyId
}