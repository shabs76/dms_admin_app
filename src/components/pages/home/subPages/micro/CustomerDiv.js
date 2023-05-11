import React from 'react';
import PropTypes from 'prop-types';
import './customerDiv.css';

function CustomerDiv({
    customerLogo, customerName,
}) {
    return (
        <div className="CustomerDivMain">
            <div className="CustomerImgHolderDiv">
                <img src={customerLogo} alt={customerName} className="CustomerImg" />
            </div>
            <div className="CustomerNameHolder">
                {
                    customerName
                }
            </div>
        </div>
    );
}

CustomerDiv.propTypes = {
    customerLogo: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
};

export default CustomerDiv;
