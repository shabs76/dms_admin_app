import React from 'react';
import PropTypes from 'prop-types';
import './infoActivatePannel.css';

function InfoActivatePannel({
    icon, Name
}) {
    return (
        <div className="InfoActivatePannelMain">
            <div className="iconHolderInfoActivatePannel">
                <span className="material-symbols-rounded">
                    {
                        icon
                    }
                </span>
            </div>
            <div className="infoHolderInfoActivatePannel">
                {
                    Name
                }
            </div>
        </div>
    );
}

InfoActivatePannel.propTypes = {
    icon: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
};

export default InfoActivatePannel;