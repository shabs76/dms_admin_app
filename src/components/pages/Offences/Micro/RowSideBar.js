import React from 'react';
import PropTypes from 'prop-types';
import './rowSideBar.css';

function RowSideBar({
    Name, value
}) {
    return (
        <div className="RowSideBarMain">
            <div className="iconHolderRowSideBar">
                <span className="material-symbols-rounded">
                    radio_button_unchecked
                </span>
            </div>
            <div className="valueHolderRowSideBar">
                <strong>
                    {
                        Name
                    }
                </strong>
                <span>
                    {
                        value
                    }
                </span>
            </div>
        </div>
    );
}

RowSideBar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    Name: PropTypes.string.isRequired,
};

export default RowSideBar;