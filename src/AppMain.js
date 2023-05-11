import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Popup from './components/subPages/Popups/Popup.js';
import './appMain.css';

function AppMain() {
    const popupState = useSelector((state) => state.PopupReducer.state);
    return (
        <div className="AppMain">
            <Outlet />
            <div className="PopUpHolderDiv" style={popupState? { display: 'flex' }: {}}>
                <Popup />
            </div>
        </div>
    );
}

export default AppMain;