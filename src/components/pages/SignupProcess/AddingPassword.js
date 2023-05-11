import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
import { add_passwords } from '../../../redux/action/signupActions';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../subPages/Micros/Loadeffect';

function AddingPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.signupReducer);
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [passwordStrength, setPasswordStrength] = useState('weak');
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const validatePassword = (password) => {
        // Check if password is longer than six characters
        if (password.length < 6) {
          return false;
        }
        
        // Check if password has at least one lowercase letter, one uppercase letter, one number, and one special character
        let hasLowercase = false;
        let hasUppercase = false;
        let hasNumber = false;
        let hasSpecialChar = false;
        const specialChars = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
        
        for (let i = 0; i < password.length; i++) {
          const char = password.charAt(i);
          if (!isNaN(parseInt(char))) {
            hasNumber = true;
          } else if (specialChars.indexOf(char) >= 0) {
            hasSpecialChar = true;
          } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            hasLowercase = true;
          } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            hasUppercase = true;
          }
        }
        
        return hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
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
            if (Inputname === 'password') {
                if(validatePassword(value)) {
                    // change to strong password state
                    setPasswordStrength('strong');
                } else {
                    setPasswordStrength('weak');
                }
            }
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
         
      
    const submitForm = async(e) => {
        e.preventDefault();
        setLoadingState(true);
        // check if both passwords are set
        if (typeof (formValues.password) === 'undefined' || typeof (formValues.c_password) === 'undefined') {
            setLoadingState(false);
            dispatch(activatePopup('error', { head: 'Error!', text: 'Both passwords and Confirm are required' }));
            return false;
        } else if (formValues.password !== formValues.c_password) {
            setLoadingState(false);
            dispatch(activatePopup('error', { head: 'Error!', text: 'Passwords Don\'t match' }));
            return false;
        } else if (!validatePassword(formValues.password)) {
            setLoadingState(false);
            dispatch(activatePopup('error', { head: 'Weak Password!', text: 'Password should be more than 6 characters long containing capital and special charaters and number' }));
            return false; 
        }

        // dispatch to add password
        dispatch(add_passwords(formValues.password));
        // navigate to domain.
        navigate('/domain/addition');
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
                    Add Your Login Passwords
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <div className="InfoAboutInputsContverifyConfig">
                                Password should be more than 6 characters long containing capital and special charaters and number
                            </div>
                            <TextInputBlock
                                InputName="password"
                                LabelName="Create Password"
                                placeHolder="not less than six characters"
                                Type="password"
                                InputStyleClass={InputClassvals.inputName === 'password' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <TextInputBlock
                                InputName="c_password"
                                LabelName="Confirm Password"
                                placeHolder="confirm password"
                                Type="password"
                                InputStyleClass={InputClassvals.inputName === 'c_password' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <div className="PasswordStrengthHolder">
                                <div className="PasswordStrengthText">
                                    Password Strength:
                                </div>
                                <div className={`colorCodeStrength ${passwordStrength === 'weak' ? '' : 'strongCodeStrength'}`} />
                                <div className="NameofStrength">
                                    {
                                        passwordStrength
                                    }
                                </div>
                            </div>
                            <div className="buttonControlsContactSection">
                                <div className="greenContactDotLong" />
                                <div className="ButtonHolderContactConfig"  style={loadingState ? { display: 'none' } : {}}>
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

export default AddingPassword;
