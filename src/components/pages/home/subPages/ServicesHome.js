import React from 'react';
import './servicesHome.css';
import { serviceData } from '../../../../sharedFunctions/serviceData';
import ServiceMicroComp from './micro/ServiceMicroComp';

function ServicesHome() {
    return (
        <div className="ServiceHomeMain">
            <h2 className="ServiceHeadServiceComp">
                Unlock your potential
            </h2>
            <div className="ServicesHolderAnArranger">
                {
                    serviceData.map((vals) => (
                        <div className="ServiceMicroHolderLoop" key={`${vals.icon}serviceMicro`}>
                            <ServiceMicroComp icon={vals.icon} head={vals.head} para={vals.para} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ServicesHome;