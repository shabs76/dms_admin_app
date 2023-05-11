import React from 'react';
import './terms.css';
// components
import TopNav from '../../subPages/Navigation/TopNav';
import TopNavMob from '../../subPages/Navigation/TopNavMob';
import Footer from '../../subPages/Footer/Footer';

function Privacy() {
    return (
        <div className="PrivacyMain">
            <div className="TopPCNavigation">
                <TopNav />
            </div>
            <div className="TopMobNavigationBar">
                <TopNavMob />
            </div>
            <div style={{ paddingTop: '50px' }} className="pageContentHolder">
                <div className="HeaderSection">
                    <div className="eightPercentHolder">
                        <h1>Summary of our Privacy Policy</h1>
                        <p className="normalLatersParagraphTerms">
                            Our privacy commitment: BusinessSpace has never sold your information to someone else for advertising, or made money by showing you other people's ads, and we never will. This has been our approach for almost 25 years, and we remain committed to it. This policy tells you what information we collect from you, what we do with it, who can access it, and what you can do about it.
                        </p>
                    </div>
                </div>
                <div className="TermsHolderSection">
                    <div className="eightPercentHolder">
                        <h1>Our Privacy Policy</h1>
                        <h2 className="subHeadersTermsAndCondition">
                            Part I = Information BusinessSpace collects and controls
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            We only collect the information that we actually need. Some of that is information that you actively give us when you sign up for an account, register for an event, ask for customer support, or buy something from us. We store your name and contact information, but we don't store credit card numbers (except with your permission and in one of our secured payment gateways).
                        </p>
                        <p className="normalLatersParagraphTerms">
                            When you visit one of our websites or use our software, we automatically log some basic information like how you got to the site, where you navigated within it, and what features and settings you use. We use this information to improve our websites and services and to drive new product development.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            Sometimes we receive information indirectly. If you ask about our products through one of our referral programs or reselling partners, or sign in to one of our products through an authentication service provider like LinkedIn or Google, they'll pass on your contact information to us. We'll use that information to complete the request that you made. If you engage with our brand on social media (for instance, liking, commenting, retweeting, mentioning, or following us), we'll have access to your interactions and profile information. We'll still have that information even if you later remove it from the social media site.
                        </p>
                        <h2 className="subHeadersTermsAndCondition">
                            What we do with your information
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            We use your information to provide the services you've requested, create and maintain your accounts, and keep an eye out for unauthorized activity on your accounts. We also use it to communicate with you about the products you're currently using, your customer support requests, new products you may like, chances for you to give us feedback, and policy updates. We analyze the information we collect to understand user needs and to improve our websites and services.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            We're required to have a legal basis for collecting and processing your information. In most cases, we either have your consent or need the information to provide the service you've requested from us. When that's not the case, we must demonstrate that we have another legal basis, such as our legitimate business interests.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            You can decline certain kinds of information use either by not providing the information in the first place or by opting out later. You can also disable cookies to prevent your browser from giving us information, but if you do so, certain website features may not work properly. We completely disable non-essential and intrusive third-party cookies from all BusinessSpace websites and products.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            We limit access to your personal information to our employees and contractors who have a legitimate need to use it. If we share your information with other parties (like developers, service providers, domain registrars, and reselling partners), they must have appropriate security measures and a valid reason for using your information, typically to serve you.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            The European Economic Area (EEA) provides certain rights to data subjects (including access, rectification, erasure, restriction of processing, data portability, and the right to object and to complain). BusinessSpace undertakes to provide you the same rights no matter where you choose to live.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            We keep your personal information for as long as it is required for the purposes stated in this Privacy Policy. When we no longer have a legitimate need to process your information, we will delete, anonymize, or isolate your information, whichever is appropriate.
                        </p>
                        <h2 className="subHeadersTermsAndCondition">
                            Part II - Information that BusinessSpace processes on your behalf
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            If you handle other people's data using BusinessSpace apps, such as information about your customers or employees, you are entrusting that data to us for processing. If you use a BusinessSpace mobile app and give the app access to your contacts and photo library, you are entrusting data to us. The data you entrust to us for processing is called service data.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            You own your service data. We protect it, limit access to it, and only process it according to your instructions. You may access it, share it through third-party integrations, and request that we export or delete it.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            We hold the data in your account as long as you choose to use BusinessSpace Services. After you terminate your account, your data will be automatically deleted from our active database within 6 months and from our backups within 3 months after that.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            If you are in the European Economic Area and you believe that someone has entrusted your information to us for processing (for instance, your employer or a company whose services you use), you can request certain actions from us regarding your data. To exercise those data rights, please contact the person or company that entrusted the data to us and we will work with them on your request.
                        </p>
                        <h2 className="subHeadersTermsAndCondition">
                            Part III - General
                        </h2>
                        <p className="normalLatersParagraphTerms">
                            There are some limitations to the privacy we can promise you. We will disclose personal information if it's necessary to comply with a legal obligation, prevent fraud, enforce an agreement, or protect our users' safety. We do not currently honor Do Not Track signals from internet browsers; when a universal standard for processing them emerges, we will follow it.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            Third-party websites and social media widgets have their own separate privacy policies. Always check the relevant privacy policy before sharing personal information with third parties.
                        </p>
                        <p className="normalLatersParagraphTerms">
                            We will contact you to let you know if we make any major changes to our privacy policy, or in the highly unlikely event that we ever decide to sell our business.
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

export default Privacy;
