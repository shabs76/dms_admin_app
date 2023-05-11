import React from 'react';
import './infoEnterprise.css';

function InfoEnterprise() {
    return (
        <div className="InfoEnterpriseMain">
            <h2 className="InfoEnterpriseHead">
                Welcome to Enterprise Service
            </h2>
            <h3 className="InfoEnterpriseMinHead">
                Fill out the form and we'll be in touch. Or call us at:
            </h3>
            <div className="callUseSectionInfoEnterprise">
                <span className="material-symbols-rounded">
                    call
                </span>
                <h1 className="CallUsInfoEnterprise">
                    +255-745-341-109
                </h1>
            </div>
            <div className="CallInfoTimeInfoEnterprise">
                Monday to Friday 8AM to 8PM EAT
            </div>
        </div>
    );
}

export default InfoEnterprise;