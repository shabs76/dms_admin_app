import React from 'react';
import PropTypes from 'prop-types';
import './pricingHome.css';

function PricingHome({
    head, para, price, features, payMode, styleClass, openPlan, planId,
}) {
    let prize = price;
    if (payMode !== 'Monthly') {
        prize = price*12;
    }
    return (
        <div className={`PricingHomeMainComp ${styleClass.main}`}>
            <div className="PricingStripContentHolder">
                <div className="topPricingStripPriceComp">
                    <h3 className="headPricingStripPriceComp">
                        {
                            head
                        }
                    </h3>
                    <div className="PriceValueStripPriceComp" style={ head.toLowerCase() === 'enterprise' ? { display: 'none' } : {}}>
                        <span className="StartPriceValueStripPriceComp">Start at</span>
                        <span className="ActualPriceValueStripPriceComp">
                            {
                                `$${prize}`
                            }
                        </span>
                        <span className="durationPriceValueStripPriceComp">
                            {
                                `/${payMode}`
                            }
                        </span>
                    </div>
                </div>
                <p className="BundleInfoPriceStripComp">
                    {
                        para
                    }
                </p>
                <div className="FeaturesSectionPriceStripComp">
                    <div className="FeaturesContentHolderPriceStripComp">
                        {
                            features.map((vals) => (
                                <div className="featureMainDivPriceStrip" key={vals.id}>
                                    <div className={`featureIconHolder ${styleClass.icon}`}>
                                        <span className="material-symbols-outlined">
                                            done
                                        </span>
                                    </div>
                                    <div className="FeatureNameValsPriceStrip">
                                        <span className="StripPriceNameFeature">
                                            {vals.name}
                                        </span>
                                        <span className="StripPriceValueFeature">
                                            {` ${vals.value}`}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="ActionNameButtonAreaStripPrice">
                <button type="button" className={`ActionNameButtonStripPrice ${styleClass.button}`} onClick={() => openPlan(planId, head)}>
                    {
                        head.toLowerCase() === 'enterprise' ? 'Contact Us' : 'Choose Plan'
                    }
                </button>
            </div>
        </div>
    );
}

PricingHome.propTypes = {
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    features: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    payMode: PropTypes.string.isRequired,
    styleClass: PropTypes.objectOf(PropTypes.string).isRequired,
    openPlan: PropTypes.func.isRequired,
    planId: PropTypes.string.isRequired,
};

export default PricingHome;