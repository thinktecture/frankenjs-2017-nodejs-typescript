import {CustomerInstance, CustomerPojo} from '../models/customer';
import {databaseProvider} from '../database/database';

export class CustomerService {
    public async create(customer: CustomerPojo): Promise<CustomerInstance> {
        return (await databaseProvider.get())
            .Customer.create({
                firstName: customer.firstName,
                lastName: customer.lastName
            });
    }

    public async list(): Promise<CustomerInstance[]> {
        return (await databaseProvider.get())
            .Customer.findAll();
    }

    public async get(id: number): Promise<CustomerInstance> {
        return (await databaseProvider.get())
            .Customer.findByPrimary(id);
    }
}

export const customerService = new CustomerService();
