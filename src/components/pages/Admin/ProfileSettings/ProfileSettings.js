import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './profileSettings.css';
// static images 
import compnyPro from '../../../../images/profavatar.png';
// redux function
import { activatePopup } from '../../../../redux/action/popupActions';
// shared functions
import { sendToBackendPost } from '../../../../sharedFunctions/apiCall';
// components
import TextInputBlock from '../../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../../subPages/Micros/Loadeffect';

function ProfileSettings() {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('weak');
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
    const submitForm = async (e) => {
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

        const changeData = {
            act: 'change pass',
            ...formValues,
        }

        const ansBack = await sendToBackendPost('/gatway/client.php', changeData);
        setLoadingState(false);
        if (typeof (ansBack) !== 'object') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Uknown error! Please try again' }));
        } else if (typeof (ansBack) === 'object' && ansBack.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success', text: 'Password change was successfull' }));
        } else if (typeof (ansBack) === 'object' && ansBack.state !== 'success') {
            dispatch(activatePopup('info', { head: 'Error', text: ansBack.data }));
        }
    }
    return (
        <div className="ProfileSettingsMain">
            <div className="SettingsTopSection">
                <h2 className="SectionNameSettingCont">
                    Profile Settings
                </h2>
            </div>
            <div className="CompanylogoSectionProfileSettings" style={{ display: 'none' }}>
                <h3 className="CompanyLogoheaderProfileSettings">Company Logo</h3>
                <div className="changeCompanyLogoContHolderProfileSetting">
                    <div className="CompanyLogoHolderProfileSettings">
                        <img src={compnyPro} alt="Client Company logo" className="ImageCompanyLogoSetings" />
                    </div>
                    <button className="ChangeCompanyLogoProfileSttingbutn" type="button">
                        Change
                    </button>
                </div>
            </div>
            <div className="ChangePassWordProfileSettingSection">
                <h3 className="ChangePasswordheadProfileSetting">Change Admin Password</h3>
                <form className="ChangePasswordFormProfileSettings" onSubmit={(e) => submitForm(e)}>
                    <div className="InputsProfileSettingsHolder">
                        <TextInputBlock
                            InputName="o_password"
                            LabelName="Current Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'e_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <div className="PassHintProfileSettings">
                            Password should have more than six characters, capital and small letters, special characters and number.
                        </div>
                        <TextInputBlock
                            InputName="password"
                            LabelName="New Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'n_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="c_password"
                            LabelName="Confirm Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'co_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <div className="PassStrengPassChange">
                            <div className="PasswordStrengthTextPassChange">
                                Password Strength:
                            </div>
                            <div className={`colorCodeStrengthPassChange ${passwordStrength === 'weak' ? '' : 'strongCodeStrengthPassChange'}`} />
                            <div className="NameofStrengthPassChange">
                                {
                                    passwordStrength
                                }
                            </div>
                        </div>
                        <div className="ChangePasswordButtonHolderSettings" style={loadingState ? { display: 'none' } : {}}>
                            <button className="ChangePasswordButtonSettings" type="submit">
                                Change Password
                            </button>
                        </div>
                        <div className="loadingEffHolder" style={loadingState ? {} : { display: 'none' }}>
                            <Loadeffect />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileSettings;
