import React from 'react';
import './enterprise.css';
// components
import TopNav from '../../subPages/Navigation/TopNav';
import TopNavMob from '../../subPages/Navigation/TopNavMob';
import InfoEnterprise from './section/InfoEnterprise';
import FormEnterprise from './section/FormEnterprise';

function Enterprise(props) {
    return (
        <div>
            <div className="TopPCNavigation">
                <TopNav />
            </div>
            <div className="TopMobNavigationBar">
                <TopNavMob />
            </div>
            <div style={{ paddingTop: '50px' }} className="pageContentHolder">
                <div className="TopGreenSectionEnterprise">
                    <div className="InfoSectionEnterprise">
                        <InfoEnterprise />
                    </div>
                    <div className="FormSectionEnterprise">
                        <FormEnterprise />
                    </div>
                </div>
                <div className="WhiteSectionEnterprise">
                    <div className="leftSectionInfoEnterPrise">
                        <h2 className="InfoheadWhiteSection">
                            Get Dedicated Hosting for BusinessSpace and BusinessMail.
                        </h2>
                        <p className="InfoParaWhiteSection">
                            Operate at 80% less than normal service with enterprise services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enterprise;
