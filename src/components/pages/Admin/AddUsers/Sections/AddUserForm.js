import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './addUserForm.css';
// redux functions
import { activatePopup } from '../../../../../redux/action/popupActions';
// components
import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';
import SelectInput from '../../../../subPages/Micros/SelectInput';

function AddUserForm() {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({ act: 'create owners', id_photo: 'https://brentles-bucket.s3.amazonaws.com/profavatar.png', owner_photo: 'https://brentles-bucket.s3.amazonaws.com/profavatar.png' });

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

        setInputClassVal({ inputName: Inputname, nameClass: '' }); // remember to remove this
    };
    const submitForm = (e) => {
        e.preventDefault();
        // check phone number 
        if (typeof (formValues.phone) === 'undefined' || formValues.phone.length !== 12) {
            dispatch(activatePopup('error', { head: 'Phone Error!', text: 'Inavalid phone number' }));
            return false;
        }

        console.log(formValues.phone);

        // try to send data to the back end
        dispatch(activatePopup('pass_confirm', { data: formValues, link: '/gatway/us.php' }));
    }
    const IDType = [
        {
            OpName: 'National ID (NIDA)',
            value: 'National ID (NIDA)',
            is_selected: true,
        },
        {
            OpName: 'Company ID (Brela)',
            value: 'Company ID (Brela)',
            is_selected: false,
        }
    ];
    return (
        <div className="AddUserFormMain">
            <form className="AddUserForm" onSubmit={(e) => submitForm(e)}>
                <div className="ResetFormButtonHolder">
                    <button className="resetButtonCreateUser" type="reset">reset</button>
                </div>
                <div className="AddUserFormInputsHolder">
                    <TextInputBlock
                        InputName="fname"
                        LabelName="First Name"
                        placeHolder="e.g. eliza"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="lname"
                        LabelName="Last Name"
                        placeHolder="e.g. Makala"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="email"
                        LabelName="Email"
                        placeHolder="e.g. eliza.makala"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'email' ? InputClassvals.nameClass : ''}
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
                            onChange={ (phone) => getvaluesForm('phone', phone)}
                            countryCodeEditable={false}
                            onlyCountries={['tz', 'ke', 'ug', 'rw']}
                            placeholder="eg. 0622000444"
                            required={true}
                            containerClass="phoneInputContainer"
                            inputClass="phoneInputClassPhone"
                            buttonClass="flagDropDownCustomPhone"
                            inputProps={{ required: true }}
                        />
                    </div>
                    <TextInputBlock
                        InputName="id_no"
                        LabelName="Identification No."
                        placeHolder="e.g. 140065056"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'id_no' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <SelectInput
                        InputName="id_type"
                        LabelName="Identification Type"
                        InputStyleClass={InputClassvals.inputName === 'id_type' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        options={IDType}
                        is_Required={true}
                    />
                    <div className="CreateUserBtnHolderAddUser">
                        <button className="CreateUserBtnAddUser" type="submit">Create Owner</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddUserForm;
