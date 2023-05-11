import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import './contanctinfo.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux function
import { add_domain_info } from '../../../redux/action/signupActions';
import { activatePopup } from '../../../redux/action/popupActions';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';

function DomainAdd() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.signupReducer);
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (typeof (formValues.domain) === 'undefined') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Please Enter domain Name you want' } ));
            return false;
        }
        const domainName = {
            domain: formValues.domain,
            domainState: 'owned',
        }
        dispatch(add_domain_info(domainName));
        navigate('/cofiguration/summary');
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
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const checkContactAvailabe = () => {
        if ( _.isEmpty(userData.password) ) {
            navigate('/contact/verification');
        }
    }

    useEffect (() => {
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
                    Enter Existing Domain Name.
                </h1>
                <div className="formHolderContactConfiguration">
                    <form className="FormContactConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderContactConfiguration">
                            <TextInputBlock
                                InputName="domain"
                                LabelName="Full Domain Name"
                                placeHolder="eg. brentles.com"
                                Type="url"
                                InputStyleClass={InputClassvals.inputName === 'domain' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={false}
                            />
                            <div className="buttonControlsSection">
                                <div className="greenDotLong" />
                                <div className="ButtonHolderPlanConfig">
                                    <button className="ButtonContinuePlanConfig" type="Submit">
                                        Finish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DomainAdd;
