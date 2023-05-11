import React from 'react';
import { useDispatch } from 'react-redux';
import './nav.css'
// action
import { activatePopup } from '../../../redux/action/popupActions';
// static images
import SpaceLogo from '../../../images/green.svg'
import { Link } from 'react-router-dom';

function TopNav() {
    const dispatch = useDispatch();
    return (
        <nav className="TopNavigationMain">
            <div className="logoSectionTopNav">
                <Link to={`/`} >
                    <img src={SpaceLogo} alt="Brentles Business Space logo" />
                </Link>
            </div>
            <div className="linksSectionTopNav">
                <div className="LinkHolderDivTopNav">
                    <Link to={`/industries`} >
                        <div className="LinkDivTopNav">Industries</div>
                    </Link>
                </div>
                <div className="LinkHolderDivTopNav">
                    <Link to={`/products`} >
                        <div className="LinkDivTopNav">Products</div>
                    </Link>
                </div>
                <div className="LinkHolderDivTopNav">
                    <Link to={`/pricing`} >
                        <div className="LinkDivTopNav">Pricing</div>
                    </Link>
                </div>
                <div className="LinkHolderDivTopNav">
                    <Link to={`/calculator`} >
                        <div className="LinkDivTopNav">Calculator</div>
                    </Link>
                </div>
            </div>
            <div className="ActionSeactionTopNav">
                <div className="buttonHolderTopNavActions">
                    <button type="button" className="GetStartedButtonTopNav" onClick={() => dispatch(activatePopup('plan', {}))}>Get started</button>
                    <button type="button" className="loginButtonTopNav" onClick={() => dispatch(activatePopup('login', {}))}>Login</button>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;
