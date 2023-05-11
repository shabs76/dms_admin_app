import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './clientEditComp.css';
// phone input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
//components
import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';
import SelectInput from '../../../../subPages/Micros/SelectInput';

function ClientEditComp({
    bname, email, phone, IdType, Nida, closeEditFun,
}) {
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
    const submitForm = (e) => {
        e.preventDefault();
        console.log(formValues);
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
        <div className="ClientEditCompMain">
            <form className="EditClientDetailsForm" onSubmit={(e) => submitForm(e)}>
                <div className="inputsClientEditHolder">
                    <TextInputBlock
                        InputName="bname"
                        LabelName="Owner Name"
                        placeHolder="e.g. eliza"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'bname' ? InputClassvals.nameClass : ''}
                        defaultVal={bname}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="email"
                        LabelName="Email"
                        placeHolder="e.g. eliza"
                        Type="email"
                        InputStyleClass={InputClassvals.inputName === 'email' ? InputClassvals.nameClass : ''}
                        defaultVal={email}
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
                            required={true}
                            value={phone}
                            containerClass="phoneInputContainer"
                            inputClass="phoneInputClassPhone"
                            buttonClass="flagDropDownCustomPhone"
                            inputProps={{ required: true }}
                        />
                    </div>
                    <SelectInput
                        InputName="id_type"
                        LabelName="Identification Type"
                        InputStyleClass={InputClassvals.inputName === 'id_type' ? InputClassvals.nameClass : ''}
                        defaultVal={IdType}
                        ChangeFun={getvaluesForm}
                        options={IDType}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="id"
                        LabelName="Identification"
                        placeHolder="e.g. 1500"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal={Nida}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="buttonHolderEditClientEditComp">
                        <button className="buttonCancelEditClientEdit" type="reset" onClick={() => closeEditFun()}>Cancel</button>
                        <button className="buttonUpdateEditClientEdit" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

ClientEditComp.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    Nida: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    IdType: PropTypes.string.isRequired,
    bname: PropTypes.string.isRequired,
    closeEditFun: PropTypes.func.isRequired,
};

export default ClientEditComp;