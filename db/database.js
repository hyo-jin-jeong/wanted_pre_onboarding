import { DataTypes, Sequelize } from 'sequelize';

import Company from '../model/company.js';
import Job from '../model/job.js';
import User from '../model/user.js';
import config from '../config.js';

const { host, username, database, password, dialect } = config.development;

export const sequelize = new Sequelize(
    database, username, password, {
    host,
    dialect
});

const initModel = () => {
    Job.init(sequelize, DataTypes);
    Company.init(sequelize, DataTypes);
    User.init(sequelize, DataTypes);
    associate();
};

const associate = () => {
    User.belongsToMany(Job, { through: 'apply_histories', foreignKey: 'userId' });
    Job.belongsToMany(User, { through: 'apply_histories', foreignKey: 'jobId' });

    Company.hasMany(Job, { foreignKey: 'companyId' });
    Job.belongsTo(Company, { foreignKey: 'companyId' });
}

initModel();