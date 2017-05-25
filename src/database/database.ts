import {Sequelize as SequelizeInstance} from 'sequelize';
import Sequelize = require('sequelize');
import {modelInitializers, Models} from '../models/models';

export interface DatabaseConfiguration {
    connectionString: string;
}

let config: DatabaseConfiguration;

class Database {
    private _models: Models = <Models>{};
    private _sequelize: SequelizeInstance;

    public async init(): Promise<Models> {
        if (!config) {
            throw new Error('No configuration set.');
        }

        this._sequelize = new Sequelize(config.connectionString);

        this._initModels();

        await this._sequelize.sync({
            force: true // Recreates the database when the server is started
        });

        return this._models;
    }

    private _initModels(): void {
        Object.keys(modelInitializers)
            .forEach(modelName => {
                const initFn = modelInitializers[modelName];
                this._models[modelName] = initFn(this._sequelize);
            });
    }
}

let modelInstance: Models;

export const databaseProvider = {
    config: (databaseConfiguration: DatabaseConfiguration) => {
        if (!databaseConfiguration) {
            throw new Error('Parameter databaseConfiguration not set.');
        }

        config = databaseConfiguration;
    },
    get: async (): Promise<Models> => {
        if (modelInstance) {
            return modelInstance;
        }

        if (!config) {
            throw new Error('Config has not been set yet. Pleaee call databaseProvider.config before.');
        }

        const db = new Database();
        modelInstance = await db.init();
        return modelInstance;
    }
};
