import Company from '../model/company.js';

async function findById(id) {
    return await Company.findOne({ attributes: ['id'], where: { id } });
}

export default {
    findById,
}