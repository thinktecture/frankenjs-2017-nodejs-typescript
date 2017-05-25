import {Controller} from './controller';
import {CustomerController} from './customer';

export const CONTROLLERS: Controller[] = [
    new CustomerController()
];
