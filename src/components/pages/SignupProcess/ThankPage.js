import React from 'react';
import { useDispatch } from 'react-redux';
import './thankpage.css';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
// static images
import Trophy from '../../../images/trophy.png';

function ThankPage() {
    const dispatch = useDispatch();
    return (
        <div className="ThankPageMain">
            <div className="flexHolderThankPage">
                <div className="TrophyHolderThankPage">
                    <img src={Trophy} alt="trophy" className="ImageTrophyThankPage" />
                </div>
                <h2 className="ThankPageHead">Congratulation!</h2>
                <div className="ThankPageDescript">
                    You have successfully created BusinessSpace account.
                    <br />
                    Our team will contact you soon to activate your account.
                    <br />
                    Thank you for choosing BusinessSpace by Brentles
                </div>
                <div className="buttonHolderThankPage">
                    <button className="LoginThankPage" onClick={() => dispatch(activatePopup('login', {}))} type="button">Login Now</button>
                </div>
            </div>
        </div>
    );
}

export default ThankPage;
