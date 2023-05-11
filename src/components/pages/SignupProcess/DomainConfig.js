import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';

function DomainConfig() {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.signupReducer);
    const submitForm = (e) => {
        e.preventDefault();
        navigate('/domain/verification');
    }
    const checkContactAvailabe = () => {
        if ( _.isEmpty(userData.password) ) {
            navigate('/contact/verification');
        }
    }

    useEffect (() => {
        checkContactAvailabe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="contactInfoMain">
            <div className="ContentHolderContactConfiguration">
                <div className="TopLogoAreaContactConfiguration">
                    <img src={LogoComp} alt="Business logo" className="TopLogoImageContactConfiguration" />
                </div>
                <h1 className="PageHeaderContactConfiguration">
                    Domain Addition.
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <div className="InfoAboutInputsContverifyConfig domainConfigTextIntro">
                                You'll need a domain, like example.com to set up email and a BusinessSpace account for your business.
                                Brentles provide only .co.tz domain for free.
                            </div>
                            <div className="buttonControlsContactSection">
                                <div className="ButtonHolderDomainConfig">
                                    <button className="ButtonHaveDomainConfig" type="button" onClick={ () =>  navigate('/your/domain') }>
                                        I HAVE ONE
                                    </button>
                                    <button className="ButtonNeedDomainContinueDomainConfig" type="Submit">
                                        NO, I NEEN ONE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DomainConfig;