import React from 'react';
import './terms.css';
// components
import TopNav from '../../subPages/Navigation/TopNav';
import TopNavMob from '../../subPages/Navigation/TopNavMob';
import Footer from '../../subPages/Footer/Footer';

function Cookie() {
    return (
        <div className="CookieMain">
            <div className="TopPCNavigation">
                <TopNav />
            </div>
            <div className="TopMobNavigationBar">
                <TopNavMob />
            </div>
            <div style={{ paddingTop: '50px' }} className="pageContentHolder">
                <div className="HeaderSection">
                    <h1>BusinessSpace - Cookie Policy</h1>
                </div>
                <div className="TermsHolderSection">
                    <div className="eightPercentHolder">
                        <h2 className="subHeadersTermsAndCondition">
                            What is a cookie?
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            A cookie is a small text file that is stored on your computer or other internet connected device in order to identify your browser, provide analytics, remember information about you such as your language preference or login information. They're completely safe and can't be used to run programs or deliver viruses to your device.
                        </p>
                        <h2 className="subHeadersTermsAndCondition">
                            What type of cookies does BusinessSpace use?
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            Cookies can either be session cookies or persistent cookies. A session cookie expires automatically when you close your browser. A persistent cookie will remain until it expires or you delete your cookies. Expiration dates are set in the cookies themselves; some may expire after a few minutes while others may expire after multiple years. Cookies placed by the website you’re visiting are called “first party cookies".
                        </p>
                        <h2 className="subHeadersTermsAndCondition">
                            How often will you update this Cookie Policy?
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                        </p>

                        <h2 className="subHeadersTermsAndCondition">
                            More information about cookies
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            If you have any questions about our use of cookies or other technologies, please email us at privacy@brentles.co.tz.
                            Useful information about cookies can be found at: <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>
                        </p>
                    </div>
                </div>
                <div className="FooterSectionTerms">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Cookie;
