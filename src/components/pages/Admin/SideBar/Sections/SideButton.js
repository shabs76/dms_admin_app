import React from 'react';
import PropTypes from 'prop-types';
import './sideButton.css';


function SideButton({
    BtName, Icon, actionFun, butnId, activeState
}) {
    return (
        <button className={`SideButtonMain ${ activeState ? 'activeSideButtonAdmin': '' }`} onClick={() => actionFun(butnId)}>
            <div className="sideButtonContentHolder">
                <div className="iconHolderSideButton">
                    <span className="material-symbols-rounded">
                        {
                            Icon
                        }
                    </span>
                </div>
                <div className={`NameHolderSideButtonAdmin ${ activeState ? 'activeNameButtonAdmin': '' }`}>
                    {
                        BtName
                    }
                </div>
                <div className={`PointerHolderSideButton ${ activeState ? 'activeArrowAdmin': '' }`}>
                    <span className="material-symbols-rounded">
                        arrow_forward_ios
                    </span>
                </div>
            </div>
        </button>
    );
}

SideButton.propTypes = {
    BtName: PropTypes.string.isRequired,
    Icon: PropTypes.string.isRequired,
    actionFun: PropTypes.func.isRequired,
    butnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    activeState: PropTypes.bool.isRequired,
};

export default SideButton;
