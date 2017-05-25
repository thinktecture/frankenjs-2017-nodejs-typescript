import DataTypes = require('sequelize');
import {Instance, Model, Sequelize} from 'sequelize';

export interface CustomerPojo {
    id?: number;
    firstName?: string;
    lastName?: string;
}

export function customerInitialize(sequelize: Sequelize) {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Customer;
}

export interface CustomerInstance extends Instance<CustomerPojo>, CustomerPojo {
}

export interface CustomerModel extends Model<CustomerInstance, CustomerPojo>, CustomerPojo {
}
