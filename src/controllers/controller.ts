import {Router} from '../server/router';

export interface Controller {
    init(router: Router): void;
}
