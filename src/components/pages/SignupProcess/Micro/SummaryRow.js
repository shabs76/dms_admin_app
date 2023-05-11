import React from 'react';
import PropTypes from 'prop-types';
import './summaryRow.css';

function SummaryRow({
    name, value
}) {
    return (
        <div className="SummaryRowMain">
            <div className="NameOfRowSummary">
                {
                    name
                }
            </div>
            <div className="ValueOfRowSummary">
                {
                    value
                }
            </div>
        </div>
    );
}

SummaryRow.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SummaryRow;
