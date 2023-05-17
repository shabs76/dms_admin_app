import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './createAddon.css';
// redux actions
import { activatePopup } from '../../../../../redux/action/popupActions';
//components
import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';
import SelectInput from '../../../../subPages/Micros/SelectInput';

function CreateAddon() {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({ act: 'create admin'});
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
        if (typeof (formValues.phone) === 'undefined' || formValues.phone.length !== 12) {
            dispatch(activatePopup('error', { head: 'Phone Error!', text: 'Inavalid phone number' }));
            return false;
        }
        dispatch(activatePopup('pass_confirm', { data: formValues, link: '/gatway/us.php' }));
    }
    const adminsOp = [
        {
            OpName: 'Main Admin',
            value: 'main',
            is_selected: false,
        },
        {
            OpName: 'Normal Admin',
            value: 'normal',
            is_selected: true,
        }
    ];
    return (
        <div className="CreateAddonMain">
            <form className="CreateAddonDetailsForm" onSubmit={(e) => submitForm(e)}>
                <div className="inputsCreateAddonHolder">
                    <TextInputBlock
                        InputName="fname"
                        LabelName="First Name"
                        placeHolder="e.g. queen"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="lname"
                        LabelName="Last Name"
                        placeHolder="e.g. mwakalinga"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="email"
                        LabelName="Email "
                        placeHolder="e.g. queen@brentles.com"
                        Type="email"
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
                    <SelectInput
                        InputName="type"
                        LabelName="Admin Type"
                        InputStyleClass={InputClassvals.inputName === 'type' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        options={adminsOp}
                        is_Required={true}
                    />
                    <div className="createAddonButtonHolder">
                        <button className="createAddonButton" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateAddon;
