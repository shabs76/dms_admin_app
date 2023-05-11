import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux functions
import { activatePopup } from '../../../redux/action/popupActions';
import { add_contact_info } from '../../../redux/action/signupActions';
// api call functions
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../subPages/Micros/Loadeffect';

function ContactInfo() {
    const PlanInfo = useSelector((state) => state.signupReducer.planInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState(false);
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
        setLoadingState(true);
        // check phone number 
        if (typeof (formValues.phone_numb) === 'undefined' || formValues.phone_numb.length !== 12) {
            dispatch(activatePopup('error', { head: 'Phone Error!', text: 'Inavalid phone number' }));
            setLoadingState(false);
            return false;
        }
        dispatch(add_contact_info(formValues));
        // send info to the back and wait for response to go to verify.
        const dataBack = {
            phone_numb: formValues.phone_numb,
            c_email: formValues.c_email,
            act: 'phone_verify',
        }
        const ansbck = await sendToBackendPost('/gatway/', dataBack);
        setLoadingState(false);
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network error. Please try again' }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
            return false;
        }
        navigate('/contact/verification');
    }
    const checkPlanAvailabe = () => {
        if ( _.isEmpty(PlanInfo) ) {
            navigate('/plan/configuration');
        }
    }

    useEffect (() => {
        checkPlanAvailabe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="contactInfoMain">
            <div className="ContentHolderContactConfiguration">
                <div className="TopLogoAreaContactConfiguration">
                    <img src={LogoComp} alt="Business logo" className="TopLogoImageContactConfiguration" />
                </div>
                <h1 className="PageHeaderContactConfiguration">
                    What are Your Current Contact Info?
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <TextInputBlock
                                InputName="first_name"
                                LabelName="First Name"
                                placeHolder="eg. John"
                                Type="text"
                                InputStyleClass={InputClassvals.inputName === 'first_name' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <TextInputBlock
                                InputName="last_name"
                                LabelName="Last Name"
                                placeHolder="eg. Doe"
                                Type="text"
                                InputStyleClass={InputClassvals.inputName === 'last_name' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <TextInputBlock
                                InputName="c_email"
                                LabelName="Current Email Address"
                                placeHolder="eg. doe@example.com"
                                Type="email"
                                InputStyleClass={InputClassvals.inputName === 'c_email' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
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
                                />
                            </div>
                            <TextInputBlock
                                InputName="country"
                                LabelName="Country or Region"
                                placeHolder="eg. tanzania"
                                Type="text"
                                InputStyleClass={InputClassvals.inputName === 'country' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <div className="buttonControlsContactSection">
                                <div className="greenContactDotLong" />
                                <div className="ButtonHolderContactConfig" style={loadingState ? { display: 'none' } : {}}>
                                    <button className="ButtonGoBackContactConfig" type="reset" onClick={ () => navigate('/plan/configuration')}>
                                        Go Back
                                    </button>
                                    <button className="ButtonContinueContactConfig" type="Submit">
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

export default ContactInfo;
