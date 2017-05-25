import {RequestHandler, Server} from 'restify';
import restify = require('restify');
import {Router} from './router';
import {CONTROLLERS} from '../controllers/controllers';

export class HttpServer implements Router{
    private _restify: Server;

    public init(port: number): void {
        this._restify = restify.createServer();

        this._restify.use(restify.queryParser());
        this._restify.use(restify.bodyParser());

        this._initControllers();

        this._restify.listen(port, () => console.log(`Server up & running on port ${port}`));
    }

    private _initControllers() {
        CONTROLLERS.forEach(controller => controller.init(this));
    }

    public get(url: string, callback: RequestHandler): void {
        this._addRoute('get', url, callback);
    }

    public post(url: string, callback: RequestHandler): void {
        this._addRoute('post', url, callback);
    }

    public put(url: string, callback: RequestHandler): void {
        this._addRoute('put', url, callback);
    }

    public del(url: string, callback: RequestHandler): void {
        this._addRoute('del', url, callback);
    }

    private _addRoute(method: string, url: string, callback: RequestHandler): void {
        if (!method) {
            throw new Error('Parameter method invalid.');
        }

        if (!url) {
            throw new Error('Parameter url invalid.');
        }

        if (!callback || typeof callback !== 'function') {
            throw new Error('Parameter callback invalid.');
        }

        method = method.toLowerCase();

        this._restify[method](url, callback);
        console.log(`Route ${method.toUpperCase()} ${url} added.`);
    }
}

export const httpServer = new HttpServer();
