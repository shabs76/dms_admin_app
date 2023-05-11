import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import './companyUserInfo.css';
// static images
import brentlesLogo from '../../../../../images/introLogo.png';

function CompanyUserInfo() {
    const [userInfo, setUserInfo] = useState({
        name: 'name',
        dp: 'https://brentles-bucket.s3.amazonaws.com/profavatar.png',
        dom: 'brentles.com',
    });
    const navigate = useNavigate();
    const logoutClient = () => {
        navigate('/');
    }
    const adminData = useSelector((state) => state.AdminReducer.data);
    const setInitUserInfo = () => {
        if (typeof (adminData.client) === 'object' && !_.isEmpty(adminData.client)) {
            const datin = {
                name: adminData.client.business_name,
                dp: adminData.client.logo,
                dom: adminData.client.domain_name,
            }
            setUserInfo(datin);
        } else if (typeof (adminData.admin) === 'object' && !_.isEmpty(adminData.admin)) {
            const datin = {
                name: adminData.admin.fname,
                dp: 'https://brentles-bucket.s3.amazonaws.com/profavatar.png',
                dom: 'brentles.com',
            }
            setUserInfo(datin);
        }
    }
    useMemo(()=> {
        setInitUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminData]);
    return (
        <div className="CompanyUserInfoMain">
            <div className="CompanyUserInfoContentHolder">
                <div className="companyInfoSectionAdmin">
                    <div className="CompanyLogoHolderCompanyUserInfo">
                        <img src={brentlesLogo} className="BrentlesLogoAdmin" alt="brentles company logo" />
                    </div>
                    <div className="CompanyNameHolderCompanuUserInfo">DMS Tanzania</div>
                    <button className="logoutButtonCompanyUserInfo" type="button" onClick={() => logoutClient()}>
                        <span className="material-symbols-rounded">
                            logout
                        </span>
                    </button>
                </div>
                <div className="clientInfoSectionAdmin">
                    <div className="ImageHolderClientLogoAdmin">
                        <img src={userInfo.dp} className="ImageClientLogoAdmin" alt="Client company logo" />
                    </div>
                    <div className="textInfoClientAdmin">
                        <h2 className="clientCompanyNameAdmin">
                            {
                                userInfo.name
                            }
                        </h2>
                        <div className="clientCompanyRegionNameAdmin">
                            Main Admin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyUserInfo;
