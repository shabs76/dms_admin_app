import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
import { add_domain_info } from '../../../redux/action/signupActions';
// api call
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../subPages/Micros/Loadeffect';

function DomainVerification() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.signupReducer);
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const [domainVerified, setDomainVerified] = useState(false);
    const navigate = useNavigate();
    const submitForm = async(e) => {
        e.preventDefault();
        setLoadingState(true);
        setDomainVerified(false);
        if (typeof (formValues.domain) === 'undefined') {
            setLoadingState(false);
            dispatch(activatePopup('error', { head: 'Error!', text: 'Please Enter domain Name you want' } ));
            return false;
        }
        const datasend = {
            domain: formValues.domain+'.co.tz',
            act: 'domain verification',
        }
        const ansbck = await sendToBackendPost('/gatway/', datasend);
        setLoadingState(false);
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network Error' } ));
        } else if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success!', text: ansbck.data } ));
            setDomainVerified(true);
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data } ));
        } 
    }
    const getvaluesForm = (Inputname, value) => {
        const tempFormVal = formValues;
        // check if it the check value
        if (typeof (value) === 'boolean') {
            if(value) {
                tempFormVal[Inputname] = 'yes';
            } else {
                delete tempFormVal[Inputname];
            }
        } else {
            tempFormVal[Inputname] = value;
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const verifyDomain = () => {
        // add domain info
        const domainName = {
            domain: formValues.domain+'.co.tz',
            domainState: 'needed',
        }
        dispatch(add_domain_info(domainName));
        navigate('/cofiguration/summary');
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
                    Pick Domain Name.
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <div className="InfoAboutInputsContverifyConfig domainConfigTextIntro">
                                Brentles provide only .co.tz domain, with first free year.
                            </div>
                            <div className="domainNameInputBlock">
                                <div className="domainNameInputHolder">
                                    <TextInputBlock
                                        InputName="domain"
                                        LabelName="Domain Name"
                                        placeHolder="eg. johncompany"
                                        Type="text"
                                        InputStyleClass={InputClassvals.inputName === 'domain' ? InputClassvals.nameClass : ''}
                                        defaultVal=""
                                        ChangeFun={getvaluesForm}
                                        is_Required={false}
                                    />
                                </div>
                                <div className="extensionNameDomain">.co.tz</div>
                            </div>
                            <div className="buttonControlsContactSection">
                                <div className="greenContactDotLong" />
                                <div className="ButtonHolderContactConfig" style={loadingState ? { display: 'none' } : {}}>
                                    <button className="ButtonGoBackContactConfig" type="submit">
                                        Verify
                                    </button>
                                    <button style={domainVerified ? {} : { display: 'none' }} className="ButtonContinueContactConfig" type="button" onClick={() => verifyDomain()}>
                                        Continue
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

export default DomainVerification;
