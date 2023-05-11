import React from 'react';
import { useDispatch } from 'react-redux';
import './actionSection.css';
// actions
import { activatePopup } from '../../../../redux/action/popupActions';
// static image
import ProductImg from '../../../../images/productMockUp.png';
import Insta from '../../../../images/instagram.svg';
import linkedin from '../../../../images/linkedin.svg';
import twitter from '../../../../images/twitter.svg';
import facebook from '../../../../images/facebook.svg';

function ActionSection() {
    const dispatch = useDispatch();
    return (
        <div className="ActionSectionHomeMain">
            <div className="greenSectionBackHomePage" >
                <div className="InsideGreenContentHolder">
                    <div className="transluteGreenCircles ActionHomeGreenControler" />
                    <div className="transluteGreenCircles ActionHomeGreenControler2" />
                </div>
            </div>
            {/* This is the text and mockup section */}
            <div className="ActionContentHolder">
                {/* social media */}
                <div className="socialMediaSectionHolderHomeAction">
                    <div className="ContsocialMediaSectionHolderHomeAction">
                        <a className="socialMediaLinkActionHome" href="https://www.instagram.com/brentles_/">
                            <img src={Insta} alt="Instagram logo" className="socialLogoActionHome" />
                        </a>
                        <a className="socialMediaLinkActionHome" href="https://www.facebook.com/BrentlesTz/">
                            <img src={facebook} alt="Instagram logo" className="socialLogoActionHome" />
                        </a>
                        <a className="socialMediaLinkActionHome" href="https://twitter.com/Brentles_">
                            <img src={twitter} alt="Instagram logo" className="socialLogoActionHome" />
                        </a>
                        <a className="socialMediaLinkActionHome" href="https://www.linkedin.com/company/brentles/">
                            <img src={linkedin} alt="Instagram logo" className="socialLogoActionHome" />
                        </a>
                    </div>
                </div>
                <div className="ActionTextSectionHolder">
                    <h2 className="HeroHeaderActionSectionHome">
                        Connect & Collaborate Effectively With Teams of Any Size!
                    </h2>
                    <p className="HeroParagraphActionSectionHome">
                        Transform your potential with our innovative and flexible solution, enabling individuals and organizations to achieve more and making working together a whole lot easier. Hello I am for Jesus.
                    </p>
                    {/* actions Button Holder */}
                    <div className="ButtonActionHolderHome">
                        <button type="button" className="GetStartedActionButtonHome" onClick={() => dispatch(activatePopup('plan', {}))}>Get started</button>
                        <button type="button" className="LearnmoreActionButtonHome">Learn More</button>
                    </div>
                    
                </div>
                {/* mockup section */}
                <div className="MockupSeactionHolder">
                    <div className="MockUpSectionDecoHolder">
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder">
                            <span className="material-symbols-outlined">
                                cloud_sync
                            </span>
                        </div>
                        {/* calendar*/}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder2">
                            <span className="material-symbols-outlined">
                                calendar_month
                            </span>
                        </div>
                        {/* file */}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder3">
                            <span className="material-symbols-outlined">
                                description
                            </span>
                        </div>
                        {/* video call */}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder4">
                            <span className="material-symbols-outlined">
                                videocam
                            </span>
                        </div>
                        {/* email */}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder5">
                            <span className="material-symbols-outlined">
                                mail
                            </span>
                        </div>
                        {/* chat */}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder6">
                            <span className="material-symbols-outlined">
                                forum
                            </span>
                        </div>
                        {/* deck */}
                        <div className="IconHolderDecoMockUpHom IconRandomIconHolder7">
                            <span className="material-symbols-outlined">
                                layers
                            </span>
                        </div>
                    </div>
                    <div className="MockUpImgeHolderHomeAction">
                        {/* search Deco */}
                        <div className="searchDecoMockSectHomeAction">
                            <div className="menuSearchDecoMockSectHomeAction">
                                <span className="material-symbols-outlined">
                                    cloud
                                </span>
                            </div>
                            <div className="textSearchDecoMockSectHomeAction">
                                Search in cloud                                
                            </div>
                            <div className="buttnSearchDecoMockSectHomeAction">
                                B
                            </div>
                        </div>
                        <img src={ProductImg} className="imageMockUpHomeAction" alt="mockup of product" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionSection;
