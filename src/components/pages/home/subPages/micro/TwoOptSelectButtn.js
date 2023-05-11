import React from 'react';
import PropTypes from 'prop-types';
import './twoOptSelectButtn.css';

function TwoOptSelectButtn({
    actionFun, opt1, opt2, actvOpt,
}) {
    return (
        <button type="button" className="TwoOptSelectButtonMain" onClick={() => actionFun(actvOpt)}>
            <div className={`OptContentHolderTwoOptBtn ${actvOpt === opt1? 'activeOptTwoOptButtn': ''}`}>
                {
                    opt1
                }
            </div>
            <div className={`OptContentHolderTwoOptBtn ${actvOpt === opt2? 'activeOptTwoOptButtn': ''}`}>
                {
                    opt2
                }
            </div>
        </button>

    );
}

TwoOptSelectButtn.propTypes = {
    actionFun: PropTypes.func.isRequired,
    opt1: PropTypes.string.isRequired,
    opt2: PropTypes.string.isRequired,
    actvOpt: PropTypes.string.isRequired,
};

export default TwoOptSelectButtn;
