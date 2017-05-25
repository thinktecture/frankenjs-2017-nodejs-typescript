import {RequestHandler} from 'restify';

export interface Router {
    get(url: string, callback: RequestHandler): void;
    post(url: string, callback: RequestHandler): void;
    put(url: string, callback: RequestHandler): void;
    del(url: string, callback: RequestHandler): void;
}
