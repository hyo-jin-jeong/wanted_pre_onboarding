import User from '../model/user.js'

async function findById(id) {
    return await User.findOne({ attributes: ['id', 'name'], where: { id } });
}

export default {
    findById,
}