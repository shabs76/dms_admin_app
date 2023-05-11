import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './getStartedPlan.css';
// actions
import { changeSelectedPlan } from '../../../../redux/action/plansAction';

function GetStartedPlan({
    price, head, para, bgcolor,planId
}) {
    const selected = useSelector((state) => state.PlanReducer.selectedPlan);
    const dispatch = useDispatch();
    const setPlan = (plan) => {
        dispatch(changeSelectedPlan(plan));
    }
    return (
        <button className={`GetStartedPlanMain ${selected === planId? 'ActiveGetStartedPlanMain': ''}`} onClick={() => setPlan(planId)}>
            <div className={`tickIndicatorGetStartedPlan ${selected === planId? 'selectedPlanGetStartedPlan': ''}`}>
                <span className="material-symbols-rounded">
                    done
                </span>
            </div>
            <div className="getStartedPlanContentHolder">
                <div className="PriceHoldergetStartedPlan" style={{ backgroundColor: bgcolor }}>
                    <h2 className="PriceValuegetStartedPlan">
                        {
                            `$${price}`
                        }
                    </h2>
                </div>
                <h3 className="NamePlanGetStartedPlan">
                    {
                        head
                    }
                </h3>
                <p className="ParaPlanGetStartedPlan">
                    {
                        para
                    }
                </p>
            </div>
        </button>
    );
}

GetStartedPlan.propTypes = {
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    planId: PropTypes.string.isRequired,
};

export default GetStartedPlan;