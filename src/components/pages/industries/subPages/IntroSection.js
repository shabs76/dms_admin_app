import React from 'react';
import './introSection.css';
// static images
import health from '../../../../images/industries/healthcare.jpg';
import Construction from '../../../../images/industries/construction.jpg';

function IntroSection() {
    return (
        <div className="IntroSectionMainIndstries">
            <div className="leftSectionIntroSection">
                <h1 className="MajorPageHeaderIntroSection">
                    Every Industry has its unique requirements.
                </h1>
                <p className="IntroParagraphIndustry">
                    That's why we offer custom bundle that combines differents applications, giving you the power to work smarter and more efficiently.
                </p>
                <div className="ButtonHolderIntroIndustry">
                    <button type="button" className="ButtonGetingStartedIntroIndustry">Get Started</button>
                </div>
            </div>
            <div className="rightSectionIntroSection">
                <div className="greenDecorBackGroundHolderIntroSection">
                    <div className="greenDecorBackGroundIntroSection" />
                </div>
                <div className="IntroImageReferenceIntroSection">
                    <div className="IntroImage1HolderIntroSectionIndustries">
                        <div className="IntroImage1BackIntroSectionIndustries" />
                        <div className="ImageHolderIndexElevatorInstroSection">
                            <img src={health} className="IntroImageIntroSectionIndustries" alt="Health care industry" />
                        </div>
                    </div>
                    <div className="IntroImage2HolderIntroSectionIndustries">
                        <div className="IntroImage2BackIntroSectionIndustries" />
                        <div className="ImageHolderIndexElevatorInstroSection">
                            <img src={Construction} className="IntroImageIntroSectionIndustries" alt="Health care industry" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;
