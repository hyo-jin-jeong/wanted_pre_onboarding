import { Model } from 'sequelize';

class Company extends Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING(50),
            },
            region: {
                type: DataTypes.STRING(50)
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at',
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            tableName: 'companies'
        })
    }
}

export default Company;