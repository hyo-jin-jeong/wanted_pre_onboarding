import { DataTypes, Sequelize } from 'sequelize';

import Job from '../model/jobs.js';
import config from '../config.js';

const { host, username, database, password, dialect } = config.db;

export const sequelize = new Sequelize(
    database, username, password, {
    host,
    dialect
});


Job.init(sequelize, DataTypes);
