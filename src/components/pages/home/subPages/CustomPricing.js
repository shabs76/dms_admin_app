import React from 'react';
import PropTypes from 'prop-types';
import './customPricing.css';

function CustomPricing({
    Pricing, Head, Para, OpenPlan, payMode, planId,
}) {
    let prize = Pricing;
    if (payMode !== 'Monthly') {
        prize = Pricing*12;
    }
    return (
        <div className="CustomPricingMain">
            <div className="CustomPrincingHolder">
                <h2 className="CustomPricingHeader">
                    {
                        Head
                    }
                </h2>
                <div className="CustomPricingPricingSec">
                    <span className="StartWordCustmPricingSec">
                        Start at
                    </span>
                    <span className="PriceValCustmPricingSec">
                        {
                            `$${prize}`
                        }
                    </span>
                    <span className="StartWordCustmPricingSec colorGreenText">
                        {
                            `/${payMode}`
                        }
                    </span>
                </div>
                <p className="CustomPricingPara">
                    {
                        Para
                    }
                </p>
                <div className="CustomPricingButtonholder">
                    <button className="CustomPricingButton" type="button" onClick={() => OpenPlan(planId)}>Start to Configure</button>
                </div>
            </div>
        </div>
    );
}


CustomPricing.propTypes = {
    Pricing: PropTypes.number.isRequired,
    Head: PropTypes.string.isRequired,
    Para: PropTypes.string.isRequired,
    OpenPlan: PropTypes.func.isRequired,
    planId: PropTypes.string.isRequired,
};

export default CustomPricing;