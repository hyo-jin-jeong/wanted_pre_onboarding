import { Model, Sequelize } from 'sequelize';

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
            content: {
                type: DataTypes.TEXT,
            },
            skill: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            companyId: {
                type: DataTypes.INTEGER,
                field: 'company_id',
                references: {
                    model: 'companies',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at',
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        }, {
            sequelize,
            timestamps: true,
            tableName: 'jobs'
        })
    }
}

export default Job;