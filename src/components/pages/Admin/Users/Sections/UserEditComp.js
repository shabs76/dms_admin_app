import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// phone input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './userEditComp.css';
// redux function
import { activatePopup } from '../../../../../redux/action/popupActions';

import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';


function UserEditComp({
    Fname, Lname,phone, Estorage, Dstorage, dispFun, UserId
}) {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({ 
        act: 'update user',
        user_id: UserId, 
        phone: phone.slice(1),
        e_storage: Estorage,
        c_storage: Dstorage,
        fname: Fname,
        lname: Lname,
    });
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
    const submitForm = (e) => {
        e.preventDefault();
        console.log(formValues);
        if (typeof (formValues.phone) === 'undefined' || formValues.phone.length !== 12) {
            dispatch(activatePopup('error', { head: 'Phone Error!', text: 'Inavalid phone number' }));
            return false;
        }

        // try to send data to the back end
        dispatch(activatePopup('pass_confirm', { data: formValues, link: '/gatway/client.php' }));
    }
    return (
        <div className="UserEditCompMain">
            <form className="EditUserDetailsForm" onSubmit={(e) => submitForm(e)}>
                <div className="inputsUserEditHolder">
                    <TextInputBlock
                        InputName="fname"
                        LabelName="First Name"
                        placeHolder="e.g. eliza"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal={Fname}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="lname"
                        LabelName="Last Name"
                        placeHolder="e.g. Makala"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                        defaultVal={Lname}
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
                            value={phone}
                            containerClass="phoneInputContainer"
                            inputClass="phoneInputClassPhone"
                            buttonClass="flagDropDownCustomPhone"
                            inputProps={{ required: true }}
                        />
                    </div>
                    <TextInputBlock
                        InputName="e_storage"
                        LabelName="Email Storage (MB)"
                        placeHolder="e.g. 1000"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal={Estorage}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="c_storage"
                        LabelName="Cloud Storage (MB)"
                        placeHolder="e.g. 1500"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal={Dstorage}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="buttonHolderEditUserEditComp">
                        <button className="buttonCancelEditUserEdit" type="reset" onClick={() => dispFun()}>Cancel</button>
                        <button className="buttonUpdateEditUserEdit" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

UserEditComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    Estorage: PropTypes.number.isRequired,
    Dstorage: PropTypes.number.isRequired,   
    dispFun: PropTypes.func.isRequired,
};

export default UserEditComp;
