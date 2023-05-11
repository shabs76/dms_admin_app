import React from 'react';
import './footer.css';
// static images
import Brentles from '../../../images/brentles.svg';
import Insta from '../../../images/instagram.svg';
import linkedin from '../../../images/linkedin.svg';
import twitter from '../../../images/twitter.svg';
import facebook from '../../../images/facebook.svg';
// components
import SubscriptionSect from './sections/SubscriptionSect';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="FooterMain">
            <div className="FooterTopCont">
                <div className="SubScriptionDivFooter">
                    <SubscriptionSect />
                </div>
            </div>
            <div className="FooterBottomSect">
                <div className="BrentlesFooterSection">
                    <div className="logoAndNameSectionFooter">
                        <div className="LogosectionFooter">
                            <img src={Brentles} alt="brentles logo" className="LogoImageFooter" />
                        </div>
                        <h1 className="BrentlesNameFooter">Brentles</h1>
                    </div>
                    <div className="BrentlesServiceInfoFooter">
                        BusinessSpace is part of brentles' B2B service offered in East Africa.
                    </div>
                </div>
                <div className="legaInfoSectionFooter">
                    <h2 className="SectionHeaderFooter">Legal Info</h2>
                    <div className="ServiceLinksHolder">
                        <Link to="/privacy">
                            <div className="LinkHolderNameFooter">Privacy</div>
                        </Link>
                        <Link to="/cookie">
                            <div className="LinkHolderNameFooter">Cookie Policy</div>
                        </Link>
                        <Link to="/terms">
                            <div className="LinkHolderNameFooter">Term of Service</div>
                        </Link>
                    </div>
                </div>
                <div className="ContactInfoSectionFooter">
                    <h2 className="SectionHeaderFooter">Contact Us</h2>
                    <div className="ServiceLinksHolderFooter">
                        <div className="contactInfoDivFooter">
                            <div className="iconHolderContactFooter">
                                <span className="material-symbols-rounded">
                                    mail
                                </span>
                            </div>
                            <div className="NameofContact">sales@brentles.co.tz</div>
                        </div>
                        <div className="contactInfoDivFooter">
                            <div className="iconHolderContactFooter">
                                <span className="material-symbols-rounded">
                                    call
                                </span>
                            </div>
                            <div className="NameofContact">+255-745-341-109</div>
                        </div>
                        <h3 className="socialMediaHeader">Social Media</h3>
                        <div className="SocialMediaDivFooter">
                            <a className="socialMediaLinkActionFooter" href="https://www.instagram.com/brentles_/">
                                <img src={Insta} alt="Instagram logo" className="socialLogoActionHome" />
                            </a>
                            <a className="socialMediaLinkActionFooter" href="https://www.facebook.com/BrentlesTz/">
                                <img src={facebook} alt="Instagram logo" className="socialLogoActionHome" />
                            </a>
                            <a className="socialMediaLinkActionFooter" href="https://twitter.com/Brentles_">
                                <img src={twitter} alt="Instagram logo" className="socialLogoActionHome" />
                            </a>
                            <a className="socialMediaLinkActionFooter" href="https://www.linkedin.com/company/brentles/">
                                <img src={linkedin} alt="Instagram logo" className="socialLogoActionHome" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
