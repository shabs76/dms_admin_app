import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
import SummaryRow from './Micro/SummaryRow';
// api calls
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// reduc function
import { activatePopup } from '../../../redux/action/popupActions';
// shared function
import { gbConvertion } from '../../../sharedFunctions/storageConvent';
// components
import Loadeffect from '../../subPages/Micros/Loadeffect';

function SummaryConf() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.signupReducer);
    const [loadingState, setLoadingState] = useState(false);
    const submitForm = async(e) => {
        e.preventDefault();
        setLoadingState(true);
        const data = {
            ...userData.planInfo,
            ...userData.contactInfo,
            ...userData.domainInfo,
            password: userData.password,
            act: 'get_started',
        }

        console.log(data);
        const anssub = await sendToBackendPost('/gatway/', data);
        console.log(anssub);
        setLoadingState(false);
        if (typeof (anssub) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Unable to send Data. Please check your internet' }));
            return false;
        } else if (typeof (anssub) === 'object' && anssub.state === 'error') {
            dispatch(activatePopup('error', { head: 'Error!', text: anssub.data }));
            return false;
        }
        navigate('/congratulations');
    }
    const checkContactAvailabe = () => {
        if ( _.isEmpty(userData.domainInfo) ) {
            navigate('/domain/addition');
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
                    Plan Configuration Summary
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <h2 className="SummaryHead">Your Details</h2>
                            <div className="summaryPlanConfigHolder">
                                <SummaryRow 
                                    name="Business Name"
                                    value={userData.planInfo.business_name}
                                />
                                <SummaryRow 
                                    name="Creator Name"
                                    value={`${userData.contactInfo.first_name} ${userData.contactInfo.last_name}`}
                                />
                                <SummaryRow 
                                    name="Creator Phone"
                                    value={`+${userData.contactInfo.phone_numb}`}
                                />
                                <SummaryRow 
                                    name="Creator email"
                                    value={userData.contactInfo.c_email}
                                />
                                <SummaryRow 
                                    name="Country/Region"
                                    value={userData.contactInfo.country}
                                />
                                <SummaryRow 
                                    name="Domain Name"
                                    value={userData.domainInfo.domain}
                                />
                                <SummaryRow 
                                    name="Plan Name"
                                    value={userData.planInfo.plan_name}
                                />
                                <SummaryRow 
                                    name="Plan ID"
                                    value={userData.planInfo.plan_id}
                                />
                                <SummaryRow 
                                    name="Max Users"
                                    value={userData.planInfo.plan_users}
                                />
                                <SummaryRow 
                                    name="Email Storage"
                                    value={gbConvertion(userData.planInfo.e_storage)}
                                />
                                <SummaryRow 
                                    name="Cloud Storage"
                                    value={gbConvertion(userData.planInfo.d_storage)}
                                />
                                <SummaryRow 
                                    name="Subscription Length"
                                    value={`${userData.planInfo.subscription_len} years`}
                                />
                                <SummaryRow 
                                    name="Subscription Price"
                                    value={`$${userData.price}`}
                                />
                            </div>
                            <div className="buttonControlsSection">
                                <div className="greenDotLong" />
                                <div className="ButtonHolderPlanConfig"  style={loadingState ? { display: 'none' } : {}}>
                                    <button className="ButtonGoBackPlanConfig" type="button" onClick={ () => navigate('/')}>
                                        Cancel
                                    </button>
                                    <button className="ButtonContinuePlanConfig" type="Submit">
                                        Submit
                                    </button>
                                </div>
                                <div className="LoadingMainHolder" style={loadingState ? {} : { display: 'none' }}>
                                    <div className="loadingHolder">
                                        <Loadeffect />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SummaryConf;