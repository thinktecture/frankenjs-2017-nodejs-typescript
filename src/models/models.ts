import {customerInitialize, CustomerModel} from './customer';

export interface Models {
    Customer: CustomerModel;
}

export const modelInitializers = {
    Customer: customerInitialize
};
