import {httpServer} from './server/httpServer';
import {DatabaseConfiguration, databaseProvider} from './database/database';

databaseProvider.config(<DatabaseConfiguration>{
    connectionString: 'postgres://frankenjs:frankenjs@localhost:5432/frankenjs'
});

httpServer.init(8080);
