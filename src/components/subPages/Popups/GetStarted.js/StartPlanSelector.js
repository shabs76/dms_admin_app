import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './startPlanSelector.css';
// import pricing and plans data
import { PricingDataFun, CustomPriceDataFun } from '../../../../sharedFunctions/princingData';
import GetStartedPlan from './GetStartedPlan';
// actions
import { deactivatePopup } from '../../../../redux/action/popupActions';

function StartPlanSelector() {
    const PlanData = useSelector(state => state.GenInfoReducer.plans);
    const selectedC = useSelector((state) => state.PlanReducer.selectedPlan);
    const CustomPriceData = CustomPriceDataFun(PlanData);
    const PricingData = PricingDataFun(PlanData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openPlanConfig = () => {
        dispatch(deactivatePopup());
        if (selectedC === '0cWTqnAHhgvC_PLAN') {
            navigate('/enterprise');
            return true;
        } else if (selectedC === 'B2P5sT0opyH9_PLAN') {
            navigate('/calculator');
            return true;
        }
        navigate('/plan/configuration');
    }
    console.log(selectedC);
    return (
        <div className="getstartedPlanSeletorMain">
            <div className="GetstartedTopSect">
                <h2 className="GetstartedPlanSeletorHead">
                    Select Your Favourite Plan
                </h2>
                <div className="getStartedDisclaimerPlanSelector">
                    Below plans' features are maximum, the plan can support and price is a starting price.
                </div>
            </div>
            <div className="plansHolderGetStartedPlanSeletor">
                <div className="NormalPlanGetStartedPlanSeletor">
                    {
                        PricingData.map((plans) => (
                            <div className="PlanLoopHolderSelector" key={`${plans.plan_id}_SeletorPlan`}>
                                <GetStartedPlan
                                    head={plans.head}
                                    para={plans.para_shot}
                                    price={plans.pricing}
                                    bgcolor={plans.color}
                                    planId={plans.plan_id}
                                />
                            </div>
                        ))
                    }
                </div>
                <GetStartedPlan
                    head={CustomPriceData.head}
                    para={CustomPriceData.para_shot}
                    price={CustomPriceData.Price}
                    bgcolor="transparent"
                    planId={CustomPriceData.plan_id}
                />
            </div>
            <div className="GetStartedLowSectPlanSelector">
                <div className="logDotDivGetStartedPlanSelector" />
                <div className="buttonsHolderGetStartedPlanSelector">
                    <button className="buttonGetStartedPlanSelector learnMoreGetStartedPlan">Learn More</button>
                    <button className="buttonGetStartedPlanSelector ContinueGetStartedPlan" onClick={() => openPlanConfig()}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StartPlanSelector;
