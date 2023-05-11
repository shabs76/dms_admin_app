import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'rc-slider/assets/index.css';
import './planConfigure.css';
// static images
import LogoComp from '../../../images/green.svg';
// shared functions
import { CalculatorFun } from '../../../sharedFunctions/calculator';
import { gbConvertion } from '../../../sharedFunctions/storageConvent';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
import { add_initial_plan_info, add_price_info } from '../../../redux/action/signupActions';
// components
import TextInputBlock from '../../subPages/Micros/TextInputBlock';
import InputSlider from '../../subPages/Micros/InputSlider';
import InputBlockWithControls from '../../subPages/Micros/InputBlockWithControls';


function PlanConfigure() {
    const dispatch = useDispatch();
    const selectedPlan = useSelector(state => state.PlanReducer.selectedPlan);
    const PlansNAddons = useSelector(state => state.GenInfoReducer);
    const Plans = PlansNAddons.plans;
    
    let planValues = {
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

    if (typeof (Plans) === 'object') {
        Object.keys(Plans).map((plan) => {
            if (typeof (Plans[plan].plan_id) !== 'undefined' && Plans[plan].plan_id === selectedPlan) {
                planValues = { ...Plans[plan] };
            }
            return 1;
        });
    }
    const initSliderVals = {
        users: {
            value: planValues.min_users,
            unit: '',
        },
        EStore: {
            value: planValues.min_e_storage,
            unit: 'GB',
        },
        DStore: {
            value: planValues.min_c_storage,
            unit: 'GB',
        },
    }
    const [slidersCurrentVals, setSlidersCurrentVals] = useState(initSliderVals);
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [configPrice, setConfigPrice] = useState({normal: 0, conf: 0});
    const navigate = useNavigate();
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
        let price = CalculatorFun('space', added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
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
        let price = CalculatorFun('space', added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
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
        let price = CalculatorFun('space', added_c_storage, added_e_storage, added_users, year_price, PlansNAddons.addOn);
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
            }
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const getValueFromSlider = (val, Inputname) => {
        if(Inputname === 'plan_users') {
            setSlidersCurrentVals({
                ...slidersCurrentVals,
                users: {
                    value: val,
                    unit: '',
                }
            })
        } 
        getvaluesForm(Inputname, val);
    };
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(add_initial_plan_info(formValues));
        navigate('/contact/add');
    }
    useEffect (() => {
        setFormValues({
            ...formValues,
            e_storage: planValues.min_e_storage,
            d_storage: planValues.min_c_storage,
            plan_users: planValues.min_users,
            subscription_len: 1,
            plan_name: planValues.plan_name,
            plan_id: selectedPlan,
        });
        setConfigPrice({ normal: planValues.price*12, conf: planValues.price*12});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="PlanConfigurationMain">
            <div className="ContentHolderPlanConfiguration">
                <div className="TopLogoAreaPlanConfiguration">
                    <img src={LogoComp} alt="Business logo" className="TopLogoImagePlanConfiguration" />
                </div>
                <h1 className="PageHeaderPlanConfiguration">
                    Set Up Your Subscription
                </h1>
                <div className="formHolderPlanConfiguration">
                    <form className="FormPlanConfiguration" onSubmit={(e) => submitForm(e)}>
                        <div className="FormContentHolderPlanConfiguration">
                            <TextInputBlock
                                InputName="business_name"
                                LabelName="Business Name"
                                placeHolder="eg. Brentles Company Ltd"
                                Type="text"
                                InputStyleClass={InputClassvals.inputName === 'business_name' ? InputClassvals.nameClass : ''}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <div className="InfoAboutInputsPlanConfig">
                                Choose number of users, Storage, and Subscription length.
                            </div>
                            <InputSlider
                                LabelName="How many people will use this?"
                                InputName="plan_users"
                                min={planValues.min_users}
                                max={planValues.max_users}
                                defaultVal={planValues.min_users}
                                onchangeFun={getValueFromSlider}
                                value={slidersCurrentVals.users.value}
                                SIUnit={slidersCurrentVals.users.unit}
                            />
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
                            <div className="subscriptionSummarySection">
                                <div className="SummaryHeadPlanConfig">
                                    Your Subscription Summary
                                </div>
                                <ul className="DetailsOfSummaryPlanConfig">
                                    <li className="PlanListPlanConfig">
                                        <div className="PlanNameSummaryPlanConfig">
                                            {
                                                planValues.plan_name
                                            }
                                        </div>
                                        <button className="ChangePlanButtonPlanConfig" type="reset" onClick={() => dispatch(activatePopup('plan', {}))}>Change</button>
                                    </li>
                                    <li className="DetailListPlanConfig">
                                        {
                                            `${formValues.plan_users} Users, ${gbConvertion(formValues.e_storage)} Email, ${gbConvertion(formValues.d_storage)} Cloud & ${formValues.subscription_len} years plan`
                                        }
                                    </li>
                                    <li className="PriceListPlanConfig">
                                        {
                                            `Pay $${configPrice.conf} for ${formValues.subscription_len} years`
                                        }
                                    </li>
                                </ul>
                                <div className="PaymentDueNPlanConfig">
                                    {
                                        `Payment due today (tax not included) $${configPrice.conf}`
                                    }
                                </div>
                            </div>
                            <div className="buttonControlsSection">
                                <div className="greenDotLong" />
                                <div className="ButtonHolderPlanConfig">
                                    <button className="ButtonGoBackPlanConfig" type="button" onClick={ () => navigate('/')}>
                                        Go Back
                                    </button>
                                    <button className="ButtonContinuePlanConfig" type="Submit">
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

export default PlanConfigure;
