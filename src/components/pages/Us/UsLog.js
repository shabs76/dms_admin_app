import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// activate pop on login
import { activatePopup } from '../../../redux/action/popupActions';

function UsLog() {
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(activatePopup('us_login', {}));
    });
    return (
        <div className="UsLogMainDiv">
        </div>
    );
}

export default UsLog;
