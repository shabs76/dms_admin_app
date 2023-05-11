import React from 'react';
import './industries.css';
// data import
import { IndustriesData } from '../../../sharedFunctions/industriesData';
// components
import TopNav from '../../subPages/Navigation/TopNav';
import TopNavMob from '../../subPages/Navigation/TopNavMob';
import IntroSection from './subPages/IntroSection';
import Products from '../home/subPages/Products';
import Footer from '../../subPages/Footer/Footer';

function Industries() {
    return (
        <div className="IndudtriesMain">
            <div className="TopPCNavigation">
                <TopNav />
            </div>
            <div className="TopMobNavigationBar">
                <TopNavMob />
            </div>
            <div className="pageContentHolder">
                <div className="IntroSectionIndustries">
                    <IntroSection />
                </div>
                <div className="listOfIndustriesPage">
                    {
                        IndustriesData.map((val) => (
                            <div key={val.id} className="IndustriesHolderIndustriesPage">
                                <Products img={val.image} para1={val.para1} para2={val.para2} head={val.head} polarity={val.pole} />
                            </div>
                        ))
                    }
                </div>
                <div className="footerIndustries">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Industries;
