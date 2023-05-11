import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './createPlan.css';
// redux actions
import { activatePopup } from '../../../../../redux/action/popupActions';
//components
import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';

function CreatePlan() {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({ act: 'create plan', type: 'active' });
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
    const submitForm = async (e) => {
        e.preventDefault();
        dispatch(activatePopup('pass_confirm', { data: formValues, link: '/gatway/us.php' }));
    }
    return (
        <div className="CreatePlanMain">
            <form className="CreatePlanDetailsForm" onSubmit={(e) => submitForm(e)}>
                <div className="inputsCreatePlanHolder">
                    <TextInputBlock
                        InputName="plan_name"
                        LabelName="Plan Name"
                        placeHolder="e.g. startup"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'plan_name' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="max_e_storage"
                        LabelName="Max Email Storage (GB)"
                        placeHolder="e.g. 100"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'max_e_storage' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="max_c_storage"
                        LabelName="Max Cloud Storage (GB)"
                        placeHolder="e.g. 150"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'max_c_storage' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="max_users"
                        LabelName="Max Users"
                        placeHolder="e.g. 30"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'max_users' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="min_e_storage"
                        LabelName="Default Email Storage (GB)"
                        placeHolder="e.g. 50"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'min_e_storage' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="min_c_storage"
                        LabelName="Default Cloud Storage (GB)"
                        placeHolder="e.g. 100"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'min_c_storage' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="min_users"
                        LabelName="Default Users"
                        placeHolder="e.g. 20"
                        Type="number"
                        InputStyleClass={InputClassvals.inputName === 'min_users' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="price"
                        LabelName="Plan Price /Month (USD)"
                        placeHolder="e.g. 40"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'price' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="createPlanButtonHolder">
                        <button className="createPlanButton" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreatePlan;