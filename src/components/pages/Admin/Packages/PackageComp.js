import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './packageComp.css';
// components
import PricingHome from '../../home/subPages/PricingHome';

import { PricingDataFun } from '../../../../sharedFunctions/princingData';
import CreatePlan from './Section/CreatePlan';

function PackageComp() {
    const PlanData = useSelector(state => state.GenInfoReducer.plans);
    const PricingData = PricingDataFun(PlanData);
    const [onViewSection, setOnViewSection] = useState('display');
    const openPlanFun = () => {
        console.log('hello plan');
    }
    return (
        <div className="PackageContMain">
            <div className="PackageTopSectionPackageCont">
                <h2 className="SectionNamePackageCont">
                    Existing Packages
                </h2>
            </div>
            <div className="headingOnContentSectionPlanCont">
                <h3 className="HeadNameOnContentPlanCont">
                    Available Plan Prices
                </h3>
                <div className="ButtonNewOldHolderPlan">
                    <button className={`PlanTypeSelector  ${onViewSection === 'display' ? 'allPlanButtonSelector' : 'newPlanButtonSelector'} `} type="button" onClick={() => setOnViewSection('display')}>All Plan Prices</button>
                    <button className={`PlanTypeSelector  ${onViewSection === 'display' ? 'newPlanButtonSelector' : 'allPlanButtonSelector'} `} type="button" onClick={() => setOnViewSection('create')}>New Plan Prices</button>
                </div>
            </div>
            <div className="PackageHolderMain" style={ onViewSection === 'display' ? {} : { display : 'none' }}>
                {
                    PricingData.map((val) => (
                        <div className="PriceStripHolderLoopPackageComp" key={`${val.head}_BundledHomepage`}>
                            <PricingHome
                                head={val.head}
                                para={val.para}
                                payMode={'Monthly'}
                                price={val.pricing}
                                features={val.features}
                                styleClass={val.style}
                                openPlan={openPlanFun}
                                planId={val.plan_id}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="CreateNewPlanPrice" style={ onViewSection === 'display' ? { display : 'none' } : {}}>
                <h2 className="HeadCreateNewPlanPrice">Create New Plan Price</h2>
                <div className="createNewPlanHolder">
                    <CreatePlan />
                </div>
            </div>

        </div>
    );
}

export default PackageComp;
