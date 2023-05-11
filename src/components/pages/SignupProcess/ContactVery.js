import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
// api calls
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../subPages/Micros/Loadeffect';

function ContactVery() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.signupReducer);
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState({ low: false, top: false});
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
    const submitForm = async(e) => {
        e.preventDefault();
        setLoadingState({ ...loadingState, low: true});
        if (typeof (formValues['vf_code']) === 'undefined') {
            setLoadingState({ ...loadingState, low: false});
            dispatch(activatePopup('error', { head: 'Error!', text: 'Verification code is required.' }));
            return false;
        }
        const data = {
            ...formValues,
            act: 'code_verify',
        }
        const ansbck = await sendToBackendPost('/gatway/', data);
        setLoadingState({ ...loadingState, low: false});
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network error. Please try again' }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
            return false;
        }
        navigate('/create/password');
    }

    const resendCode = async () => {
        const data = {
            ...userInfo.contactInfo,
            act: 'phone_verify',
        }
        setLoadingState({ ...loadingState, top: true});
        const ansbck = await sendToBackendPost('/gatway/', data);
        setLoadingState({ ...loadingState, top: false});
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network error. Please try again' }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success!', text: ansbck.data }));
        }
    }

    const updateDetails = async () => {
        setLoadingState({ ...loadingState, low: true});
        if (typeof (formValues.phone_numb) === 'undefined' || typeof (formValues.c_email) === 'undefined') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Phone number and email are required' }));
            return false;
        } else if (formValues.phone_numb.length !== 12) {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Invalid phone number' }));
            return false;
        }

        const data = {
            ...formValues,
            act: 'update_code',
        }
        const ansbck = await sendToBackendPost('/gatway/', data );
        setLoadingState({ ...loadingState, top: false});
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network error. Please try again' }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
            dispatch(activatePopup('info', { head: 'Error!', text: ansbck.data }));
        }
    }

    const checkContactAvailabe = () => {
        if ( _.isEmpty(userInfo.contactInfo) ) {
            navigate('/contact/add');
        }
    }

    useEffect (() => {
        setFormValues({ ...userInfo.contactInfo, });
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
                            <div className="InfoAboutInputsContverifyConfig">
                                A six digits code was sent to email and phone number below.
                            </div>
                            <TextInputBlock
                                InputName="c_email"
                                LabelName="Current Email Address"
                                placeHolder="eg. doe@example.com"
                                Type="email"
                                InputStyleClass={InputClassvals.inputName === 'c_email' ? InputClassvals.nameClass : ''}
                                defaultVal={userInfo.contactInfo.c_email}
                                ChangeFun={getvaluesForm}
                                is_Required={false}
                            />
                            <div className="PhoneNumberInputHolder">
                                <div className="PhoneNumberLabelContactConfig">
                                    Phone Number
                                </div>
                                <PhoneInput
                                    country={'tz'}
                                    onChange={ (phone) => getvaluesForm('phone_numb', phone)}
                                    countryCodeEditable={false}
                                    onlyCountries={['tz', 'ke', 'ug', 'rw']}
                                    placeholder="eg. 0622000444"
                                    containerClass="phoneInputContainer"
                                    inputClass="phoneInputClassPhone"
                                    buttonClass="flagDropDownCustomPhone"
                                    inputProps={{ required: true }}
                                    value={userInfo.contactInfo.phone_numb}
                                />
                            </div>
                            <TextInputBlock
                                InputName="vf_code"
                                LabelName="Enter Verification Code"
                                placeHolder="six digits"
                                Type="number"
                                InputStyleClass={InputClassvals.inputName === 'vf_code' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <div className="SendCodeAgainSectionContaverfy">
                                <div className="DidntgetPromptDiv">
                                    Didn't get it?
                                </div>
                                <div className="LoadingMainHolder" style={loadingState.top ? {} : { display: 'none' }}>
                                    <div className="loadingHolder">
                                        <Loadeffect />
                                    </div>
                                </div>
                                <button className="sendAgainButtonContacverfy"  style={loadingState.top ? { display: 'none' } : {}} onClick={() => resendCode()} type="button">Send Again</button>
                            </div>
                            <div className="buttonControlsContactSection">
                                <div className="greenContactDotLong" />
                                <div className="ButtonHolderContactConfig"  style={loadingState.low ? { display: 'none' } : {}}>
                                    <button className="ButtonGoBackContactConfig changeContactVerCon" type="button" onClick={ () => updateDetails()}>
                                        Change Contacts
                                    </button>
                                    <button className="ButtonContinueContactConfig" type="Submit">
                                        Continue
                                    </button>
                                </div>
                                <div className="LoadingMainHolder" style={loadingState.low ? {} : { display: 'none' }}>
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

export default ContactVery;
