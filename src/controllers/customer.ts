import {Controller} from './controller';
import {Router} from '../server/router';
import {customerService} from '../services/customer';
import {Request, Response} from 'restify';
import {CustomerPojo} from '../models/customer';

export class CustomerController implements Controller {
    public init(router: Router): void {
        router.get('/customers', this._list.bind(this));
        router.get('/customer/:id', this._get.bind(this));
        router.post('/customers', this._post.bind(this));
    }

    private async _list(req: Request, res: Response) {
        const list = await customerService.list();
        res.json(200, list);
    }

    private async _get(req: Request, res: Response) {
        const customer = await customerService.get(+req.params.id);
        res.json(200, customer);
    }

    private async _post(req: Request, res: Response) {
        const customer = await customerService.create(<CustomerPojo> {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        res.json(200, customer);
    }
}
