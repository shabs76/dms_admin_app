import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './nav.css'
// action
import { activatePopup } from '../../../redux/action/popupActions';
// static images
import SpaceLogo from '../../../images/green.svg'
import { Link } from 'react-router-dom';

function TopNavMob() {
    const [dropdownState, setDropDownstate] = useState({});
    const dispatch = useDispatch();
    return (
        <nav className="TopNavMobileMain">
            <div className="VisibleContentHolder">
                <div className="leftSectionHumber">
                    <button className="MenubuttonMobileNav" type="button" onClick={() => setDropDownstate({ height: '100vh' })}>
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                </div>
                <div className="centerLogoSection">
                    <img src={SpaceLogo} className="LogoNavMobImage" alt="Company logo" />
                </div>
                <div className="GetStartedSectionMobileNav">
                    <button className="getStartedButtonMobileNav" type="button" onClick={() => dispatch(activatePopup('plan', {}))}>Start</button>
                </div>
            </div>
            <div className="InvisibleContentHolderMobilenav" style={dropdownState}>
                <div className="closeButtonHolderMobileNav">
                    <button className="closeButtonMobileNav" onClick={() => setDropDownstate({})}>
                        <span className="material-symbols-rounded">
                            close
                        </span>
                    </button>
                </div>
                <div className="LinksHolderMobileNav">
                    <div className="linkHolderDivMobilenav">
                        <Link to={`industries`} >
                            <div className="LinkDivTopMobNav">Industries</div>
                        </Link>
                    </div>
                    <div className="linkHolderDivMobilenav">
                        <Link to={`products`} >
                            <div className="LinkDivTopMobNav">Products</div>
                        </Link>
                    </div>
                    <div className="linkHolderDivMobilenav">
                        <Link to={`pricing`} >
                            <div className="LinkDivTopMobNav">Pricing</div>
                        </Link>
                    </div>
                    <div className="linkHolderDivMobilenav">
                        <Link to={`calculator`} >
                            <div className="LinkDivTopMobNav">Calculator</div>
                        </Link>
                    </div>
                    <div className="LoginbuttonHolder">
                        <button className="loginButtonMobileNav" type="button" onClick={() => dispatch(activatePopup('login', {}))}>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNavMob;
