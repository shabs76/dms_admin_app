import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './home.css';
// components
import TopNav from '../../subPages/Navigation/TopNav';
import ActionSection from './subPages/ActionSection';
import Products from './subPages/Products';
import PricingHome from './subPages/PricingHome';
import TwoOptSelectButtn from './subPages/micro/TwoOptSelectButtn';
import CustomPricing from './subPages/CustomPricing';
import TopNavMob from '../../subPages/Navigation/TopNavMob';
// actions
import { changeSelectedPlan } from '../../../redux/action/plansAction';
// data import 
import { productData } from '../../../sharedFunctions/productsData';
import ServicesHome from './subPages/ServicesHome';
import { PricingDataFun, CustomPriceDataFun } from '../../../sharedFunctions/princingData';
import Customers from './subPages/Customers';
import Footer from '../../subPages/Footer/Footer';

function Home() {
    const PlanData = useSelector(state => state.GenInfoReducer.plans);
    const CustomPriceData = CustomPriceDataFun(PlanData);
    const PricingData = PricingDataFun(PlanData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activePayMode, setActivePayMode] = useState('Monthly');
    const selectPaymentMode = (actvOpt) => {
        if(actvOpt === 'Monthly') {
            setActivePayMode('Annually');
        } else {
            setActivePayMode('Monthly');
        }
    }
    const openPlanFun = (planId, planName) =>{
        if (planName.toLowerCase() === 'enterprise') {
            navigate('/enterprise');
            return true;
        }
        dispatch(changeSelectedPlan(planId));
        navigate('/plan/configuration');
    }
    const openCalulator = (planId) => {
        dispatch(changeSelectedPlan(planId));
        navigate('/calculator');
    }
    return (
        <div>
            <div className="TopPCNavigation">
                <TopNav />
            </div>
            <div className="TopMobNavigationBar">
                <TopNavMob />
            </div>
            <div className="pageContentHolder">
                <div className="ActsHomepage">
                    <ActionSection />
                </div>
                <div className="ProductsHomePage">
                    {
                        productData.map((val) => (
                            <div key={val.id} className="ProductCompHolderHome">
                                <Products img={val.image} para1={val.para1} para2={val.para2} head={val.head} polarity={val.pole} />
                            </div>
                        ))
                    }
                </div>
                <div className="servicesSectionHomePage">
                    <ServicesHome />
                </div>
                <div className="PricingSectionHome">
                    <div className="PricingSectionContentHolderHome">
                        <div className="TopPricingSectionHome">
                            <div className="TopSectionPricingTextAndHead">
                                <h2 className="PricingSectionHeaderHome">
                                    Simple, transparent pricing
                                </h2>
                                <div className="PricingTextGreenPricingSectionHome">
                                    No contracts, No surprise fees.
                                </div>
                            </div>
                            <div className="priceModeChangerButtonHolder">
                                <TwoOptSelectButtn actionFun={selectPaymentMode} opt1="Monthly" opt2="Annually" actvOpt={activePayMode} />
                            </div>
                        </div>
                        <div className="PricegroupHolderHomePage">
                            {
                                PricingData.map((val) => (
                                    <div className="PriceStripHolderLoop" key={`${val.head}_BundledHomepage`}>
                                        <PricingHome
                                            head={val.head}
                                            para={val.para}
                                            payMode={activePayMode}
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
                        <div className="CustomPricingSection">
                            <CustomPricing
                                Head={CustomPriceData.head}
                                Para={CustomPriceData.para}
                                Pricing={CustomPriceData.Price}
                                payMode={activePayMode}
                                OpenPlan={openCalulator}
                                planId={CustomPriceData.plan_id}
                            />
                        </div>
                    </div>
                </div>
                <div className="customerHomeSection">
                    <Customers />
                </div>
                <div className="FooterSectionHome">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
