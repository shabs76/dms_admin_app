import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './formEnterprise.css';
// redux function
import { activatePopup, deactivatePopup } from '../../../../redux/action/popupActions';
// shared function
import { sendToBackendPost } from '../../../../sharedFunctions/apiCall';
// components
import TextInputBlock from '../../../subPages/Micros/TextInputBlock';
import PhoneInput from 'react-phone-input-2';

function FormEnterprise() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
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
    const formSubMit = async (e) => {
        e.preventDefault();
        if (typeof (formValues.phone_numb) === 'undefined' || formValues.phone_numb.length !== 12) {
            dispatch(activatePopup('error', { head: 'Phone Error!', text: 'Inavalid phone number' }));
            return false;
        }
        const dataBack = {
            act: 'enterprise request',
            ...formValues,
        }
        dispatch(activatePopup('loading', {}));
        const ansbck = await sendToBackendPost('/gatway/', dataBack);
        if (typeof (ansbck) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Network error. Please try again' }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
            return false;
        } else if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success', text: ansbck.data }));
            setTimeout(() => {
                navigate('/');
                deactivatePopup();
            }, 7000);
        }
    }
    return (
        <div className="FormEnterpriseMain">
            <form onSubmit={(e) => formSubMit(e)}>
                <div className="PersonalSection">
                    <div className="sideSectionInfo">
                        <h2 className="SectionHeaderFormEnterprise">
                            Personal Info:
                        </h2>
                    </div>
                    <div className="FormInputEnterprise">
                        <TextInputBlock
                            InputName="fname"
                            LabelName="First Name"
                            placeHolder="eg. Jasmine"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="lname"
                            LabelName="Last Name"
                            placeHolder="eg. Mvungi"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="jobT"
                            LabelName="Job Title"
                            placeHolder="eg. CTO"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'jobT' ? InputClassvals.nameClass : ''}
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
                            InputName="email"
                            LabelName="Business Email"
                            placeHolder="eg. Jasmine@example.com"
                            Type="email"
                            InputStyleClass={InputClassvals.inputName === 'email' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                    </div>
                </div>
                <div className="PersonalSection">
                    <div className="sideSectionInfo">
                        <h2 className="SectionHeaderFormEnterprise">
                            Company Info:
                        </h2>
                    </div>
                    <div className="FormInputEnterprise">
                        <TextInputBlock
                            InputName="bname"
                            LabelName="Business Name"
                            placeHolder="eg. Js Company"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'bname' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="industry"
                            LabelName="Industry"
                            placeHolder="eg. Construction"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'industry' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="n_employees"
                            LabelName="Number of Employees"
                            placeHolder="eg. 120"
                            Type="number"
                            InputStyleClass={InputClassvals.inputName === 'n_employees' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="country"
                            LabelName="Country"
                            placeHolder="eg. Tanzania"
                            Type="text"
                            InputStyleClass={InputClassvals.inputName === 'country' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                    </div>
                </div>
                <div className="ButtonHolderFormEnterprise">
                    <button onClick={() => navigate('/')} className="HomeButtonFormEnterprise" type="reset">
                        <span className="material-symbols-rounded">
                            home_app_logo
                        </span>
                    </button>
                    <button className="ButtonFormEnterprise" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormEnterprise;
