import React from 'react';
import './customers.css';
// customer Data
import { customerData } from '../../../../sharedFunctions/customersData';
// components
import CustomerDiv from './micro/CustomerDiv';
import _ from 'lodash';

function Customers() {
    return (
        <div className="CustomersMain">
            <div className="CustomerContentHolder">
                <h2 className="CustomersHeader">
                    Our Tanzanian Customers
                </h2>
                <div className="CustomersIndVHolder">
                    {
                        typeof (customerData) === 'object' && !_.isEmpty(customerData)
                            ? customerData.map((customer) => (
                                <div className="CustomerDivLooper" key={customer.name}>
                                    <CustomerDiv
                                        customerLogo={customer.logo}
                                        customerName={customer.name}
                                    />
                                </div>
                            ))
                            : (<div className="EmptyCustomer">Fetching Data ...</div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Customers;