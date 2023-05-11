import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './calculator.css';
// static images
import LogoComp from '../../../images/green.svg';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
import { add_initial_plan_info, add_price_info } from '../../../redux/action/signupActions';
import { changeSelectedPlan } from '../../../redux/action/plansAction';
// shared function
import { CalculatorFun } from '../../../sharedFunctions/calculator';
import { gbConvertion } from '../../../sharedFunctions/storageConvent';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import InputBlockWithControls from '../../subPages/Micros/InputBlockWithControls';

function Calculator() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({ service_name: 'b_mailer' });
    const [configPrice, setConfigPrice] = useState({normal: 0, conf: 0});
    const selectedPlan = useSelector(state => state.PlanReducer.selectedPlan);
    const PlansNAddons = useSelector(state => state.GenInfoReducer);
    const Plans = PlansNAddons.plans;
    
    let planValuesIn = {
        max_e_storage: 10000,
        max_c_storage: 500000,
        max_users: 10000,
        min_e_storage: 5,
        min_c_storage: 0,
        min_users: 2,
        price: 1.54,
        plan_name: 'Custom',
        plan_id: selectedPlan,
    }
    const [planValues, setPlanValues] = useState(planValuesIn);
    
    const mailChackernCalculator = (inputVal) => {
        // check if the value is less than 
        if (inputVal < planValues.min_e_storage) {
            inputVal = planValues.min_e_storage;
        } else if (inputVal > planValues.max_e_storage) {
            dispatch(activatePopup('error', { head: 'Error', text: 'Email storage for this plan should not be more than '+planValues.max_e_storage+' GB' }));
            return false;
        }
        let c_storage = planValues.min_c_storage;
        if (typeof (formValues.d_storage) !== 'undefined') {
            c_storage = formValues.d_storage;
        }
        let users = planValues.min_users;
        if (typeof (formValues.plan_users) !== 'undefined') {
            users = formValues.plan_users;
        }
        const year_price = planValues.price*12;
        const added_e_storage = inputVal - planValues.min_e_storage;
        const added_c_storage = c_storage - planValues.min_c_storage;
        const added_users = users - planValues.min_users;
        let price = CalculatorFun(formValues.service_name, added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
        const Nprice = price;
        if (typeof (formValues.subscription_len) !== 'undefined' && formValues.subscription_len > 1){
            price = Math.ceil(price*formValues.subscription_len*0.95);
        }
        dispatch(add_price_info(price));
        setConfigPrice({ normal: Nprice, conf: price });
    }
    const CloudChackernCalculator = (inputVal) => {
        // check if the value is less than 
        if (inputVal < planValues.min_c_storage) {
            inputVal = planValues.min_c_storage;
        } else if (inputVal > planValues.max_c_storage) {
            dispatch(activatePopup('error', { head: 'Error', text: 'Cloud storage for this plan should not be more than '+planValues.max_c_storage+' GB' }));
            return false;
        }
        let e_storage = planValues.min_e_storage;
        if (typeof (formValues.e_storage) !== 'undefined') {
            e_storage = formValues.e_storage;
        }
        let users = planValues.min_users;
        if (typeof (formValues.plan_users) !== 'undefined') {
            users = formValues.plan_users;
        }
        const year_price = planValues.price*12;
        const added_c_storage = inputVal - planValues.min_c_storage;
        const added_e_storage = e_storage - planValues.min_e_storage;
        const added_users = users - planValues.min_users;
        let price = CalculatorFun(formValues.service_name, added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
        const Nprice = price;
        if (typeof (formValues.subscription_len) !== 'undefined' && formValues.subscription_len > 1){
            price = Math.ceil(price*formValues.subscription_len*0.95);
        }
        dispatch(add_price_info(price));
        setConfigPrice({ normal: Nprice, conf: price });
    }
    const UsersChackernCalculator = (inputVal) => {
        // check if the value is less than 
        if (inputVal < planValues.min_users) {
            inputVal = planValues.min_users;
        } else if (inputVal > planValues.max_users) {
            dispatch(activatePopup('error', { head: 'Error', text: 'Number of users for this plan should not be more than '+planValues.max_users }));
            return false;
        }
        let e_storage = planValues.min_e_storage;
        if (typeof (formValues.d_storage) !== 'undefined') {
            e_storage = formValues.e_storage;
        }
        let c_storage = planValues.min_c_storage;
        if (typeof (formValues.d_storage) !== 'undefined') {
            c_storage = formValues.d_storage;
        }
        const year_price = planValues.price*12;
        const added_c_storage = c_storage - planValues.min_c_storage;
        const added_e_storage = e_storage - planValues.min_e_storage;
        const added_users = inputVal - planValues.min_users;
        let price = CalculatorFun(formValues.service_name, added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
        const Nprice = price;
        if (typeof (formValues.subscription_len) !== 'undefined' && formValues.subscription_len > 1){
            price = Math.ceil(price*formValues.subscription_len*0.95);
        }
        dispatch(add_price_info(price));
        setConfigPrice({ normal: Nprice, conf: price });
    }
    const SubChackernCalculator = (inputVal) => {
        // check if the value is less than 
        let price = configPrice.normal;
        if (inputVal > 1){
            price = Math.ceil(price*inputVal*0.95);
        }
        dispatch(add_price_info(price));
        setConfigPrice({ ...configPrice, conf: price });
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
            if (Inputname === 'e_storage') {
                mailChackernCalculator(value);
            } else if (Inputname === 'd_storage') {
                CloudChackernCalculator(value);
            } else if (Inputname === 'plan_users') {
                UsersChackernCalculator(value);
            } else if (Inputname === 'subscription_len') {
                SubChackernCalculator(value);
            } else if (Inputname === 'service_name') {
                mailChackernCalculator(formValues.e_storage);
            }
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const submitForm = (e) => {
        e.preventDefault();
        // check service name and set cloud to zero when bmailer is selected
        if (formValues.service_name !== 'space') {
            const tempvals = formValues;
            tempvals.d_storage = 0;
            setFormValues(tempvals);
            dispatch(add_initial_plan_info(tempvals));
            navigate('/contact/add');
            return true;
        }
        dispatch(add_initial_plan_info(formValues));
        navigate('/contact/add');
    }
    useEffect (() => {
        dispatch(changeSelectedPlan('B2P5sT0opyH9_PLAN'));
        if (typeof (Plans) === 'object') {
            Object.keys(Plans).map((plan) => {
                if (typeof (Plans[plan].plan_id) !== 'undefined' && Plans[plan].plan_id === selectedPlan) {
                    setPlanValues({ ...Plans[plan] });
                    console.log(Plans[plan]);
                    setFormValues({
                        ...formValues,
                        e_storage: Plans[plan].min_e_storage,
                        d_storage: Plans[plan].min_c_storage,
                        plan_users: Plans[plan].min_users,
                        price: Plans[plan].price,
                        subscription_len: 1,
                        plan_name: Plans[plan].plan_name,
                        plan_id: selectedPlan,
                    });
                    setConfigPrice({ normal: Plans[plan].price*12, conf: Plans[plan].price*12});
                }
                return 1;
            });
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Plans, selectedPlan]);
    return (
        <div className="CalculatorMain">
            <div className="ContentHolderCalculatorConfiguration">
                <div className="TopLogoAreaCalculatorConfiguration">
                    <img src={LogoComp} alt="Business logo" className="TopLogoImageCalculatorConfiguration" />
                </div>
                <h1 className="PageHeaderCalculatorConfiguration">
                    Custom Plan Calculator
                </h1>
                <div className="formHolderCalculatorConfiguration">
                    <form className="FormCalculatorConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHoldercalculatorConfiguration">
                            <div className="InfoAboutInputsContverifyConfigCalulator">
                                <ul className="ConstantsHolderCalculator">
                                    <li className="CalculatorFixedVals">
                                        {
                                            `Space User: $12/year`
                                        }
                                    </li>
                                    <li className="CalculatorFixedVals">
                                        {
                                            `BMailer User: 2.5GB gives free user & $1/year gives a user.`
                                        }
                                    </li>
                                </ul>
                            </div>

                            {/* inputs goes here */}
                            <h3>Calculator Inputs</h3>
                            <div className="TypeOfServiceSelectorHolder">
                                <label className="labelServiceCalculator">
                                    <input onChange={(e) => getvaluesForm('service_name', e.target.value)} defaultChecked={true} type="radio" name="service_name" value="b_mailer" className="RadioButtonServiceCalculator" />
                                    <div className="LabelNameRadioCalculator">BMailer</div>
                                </label>
                                <label className="labelServiceCalculator">
                                    <input onChange={(e) => getvaluesForm('service_name', e.target.value)}  type="radio" name="service_name" value="space" className="RadioButtonServiceCalculator" />
                                    <div className="LabelNameRadioCalculator">BusinessSpace</div>
                                </label>
                            </div>
                            <TextInputBlock
                                InputName="business_name"
                                LabelName="Business Name"
                                placeHolder="eg. Js Company"
                                Type="text"
                                InputStyleClass={InputClassvals.inputName === 'business_name' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <InputBlockWithControls
                                InputName="plan_users"
                                LabelName="Number of Users"
                                placeHolder="eg. 1 and above"
                                Type="number"
                                InputStyleClass={InputClassvals.inputName === 'plan_users' ? InputClassvals.nameClass : ''}
                                defaultVal={planValues.min_users}
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                                min={planValues.min_users}
                                max={planValues.max_users}
                                steps={1}                           
                            />
                            <InputBlockWithControls
                                InputName="e_storage"
                                LabelName="Email Storage (GB)"
                                placeHolder="eg. 2.5"
                                Type="number"
                                InputStyleClass={InputClassvals.inputName === 'e_storage' ? InputClassvals.nameClass : ''}
                                defaultVal={planValues.min_e_storage}
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                                max={planValues.max_e_storage}
                                steps={1}
                                min={planValues.min_e_storage}                                
                            />
                            <div style={formValues.service_name === 'space' ? {} : { display: 'none' }}>
                                <InputBlockWithControls
                                    InputName="d_storage"
                                    LabelName="Cloud Storage (GB)"
                                    placeHolder="eg. 50.5"
                                    Type="number"
                                    InputStyleClass={InputClassvals.inputName === 'd_storage' ? InputClassvals.nameClass : ''}
                                    defaultVal={planValues.min_c_storage}
                                    ChangeFun={getvaluesForm}
                                    is_Required={true}
                                    max={planValues.max_c_storage}
                                    steps={1}
                                    min={planValues.min_c_storage}
                                />
                            </div>
                            <InputBlockWithControls
                                InputName="subscription_len"
                                LabelName="Subscription Length (years)"
                                placeHolder="eg. 3"
                                Type="number"
                                InputStyleClass={InputClassvals.inputName === 'subscription_len' ? InputClassvals.nameClass : ''}
                                defaultVal="1"
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                                max={5}
                                steps={1}
                                min={1}
                            />
                            <div className="subscriptionSummarySectionCalculator">
                                <div className="SummaryHeadPlanConfigCalculator">
                                    Your Subscription Summary
                                </div>
                                <ul className="DetailsOfSummaryPlanConfigCalculator">
                                    <li className="DetailListPlanConfigCalculator">
                                        NB: Business Pro & Plus offer better value when matching number of users.
                                    </li>
                                    <li className="PlanListPlanConfigCalculator">
                                        <div className="PlanNameSummaryPlanConfigCalculator">
                                            {
                                                `${planValues.plan_name} Plan`
                                            }
                                        </div>
                                    </li>
                                    <li className="DetailListPlanConfigCalculator">
                                        {
                                            `${formValues.plan_users} Users, ${gbConvertion(formValues.e_storage)} Email, ${gbConvertion(formValues.d_storage)} Cloud & ${formValues.subscription_len} years plan`
                                        }
                                    </li>
                                    <li className="PriceListPlanConfigCalculator">
                                        {
                                            `Pay $${configPrice.conf} for ${formValues.subscription_len} years`
                                        }
                                    </li>
                                </ul>
                                <div className="PaymentDueNPlanConfigCalculator">
                                    {
                                        `Payment due today (tax not included) $${configPrice.conf}`
                                    }
                                </div>
                            </div>
                            <div className="buttonControlsSectionCalculator">
                                <div className="greenDotLongCalculator" />
                                <div className="ButtonHolderPlanConfigCalculator">
                                    <button className="ButtonGoBackPlanConfigCalculator" type="button" onClick={ () => navigate('/')}>
                                        Go Back
                                    </button>
                                    <button className="ButtonContinuePlanConfigCalculator" type="Submit">
                                        Continue
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

export default Calculator;
