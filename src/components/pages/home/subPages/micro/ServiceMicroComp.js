import React from 'react';
import PropTypes from 'prop-types';
import './serviceMicroComp.css';


function ServiceMicroComp({
    icon, head, para,
}) {
    return (
        <div className="ServiceMicroCompMainComp">
            <div className="serviceMicroCompIconHolder">
                <span className="material-symbols-outlined">
                    {
                        icon
                    }
                </span>
            </div>
            <h3 className="serviceMicroHead">
                {
                    head
                }
            </h3>
            <p className="ServiceMicroParagraph">
                {
                    para
                }
            </p>
        </div>
    );
}

ServiceMicroComp.propTypes = {
    icon: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
};

export default ServiceMicroComp;
