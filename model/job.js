import { Model } from 'sequelize';

class Job extends Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            position: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            compensation: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            context: {
                type: DataTypes.TEXT,
            },
            skill: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: true,
            tableName: 'jobs'
        }
        )
    }
}

export default Job;