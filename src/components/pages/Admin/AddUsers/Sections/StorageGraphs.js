import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './storageGraphs.css';
// shared functions
import { gbConvertion } from '../../../../../sharedFunctions/storageConvent';

const styleEmail = {
    strokeLinecap: 'butt',
    textSize: '13px',
    pathTransitionDuration: 0.5,
    pathColor: '#008134',
    textColor: '#F0F0F0',
    trailColor: '#F0F0F0',
    backgroundColor: '#00000000',
};

const styleDrive = {
    strokeLinecap: 'butt',
    textSize: '13px',
    pathTransitionDuration: 0.5,
    pathColor: '#BEE8E1',
    textColor: '#F0F0F0',
    trailColor: '#F0F0F0',
    backgroundColor: '#00000000',
};
function StorageGraphs() {
    const initData = {
        s_Email: {t: 150000, u: 3000},
        n_users: {t: 12000, u: 9000},
        s_cloud: {t: 200000, u: 45000},
    }
    const [metrics, setMetrics] = useState(initData);
    const adminData = useSelector((state) => state.AdminReducer.data);
    const setInitUser = () => {
        if (typeof (adminData.subscription) === 'object' && !_.isEmpty(adminData.subscription)) {
            if (typeof (adminData.storage) === 'object' && !_.isEmpty(adminData.storage)) {
                const useData = {
                    s_Email: {t: adminData.subscription.e_storage_mb, u: adminData.storage.email_mb},
                    n_users: {t: adminData.subscription.users, u: adminData.storage.users},
                    s_cloud: {t: adminData.subscription.c_storage_mb, u: adminData.storage.cloud_mb},
                };
                setMetrics(useData);
            } else {
                const usevData = {
                    s_Email: {t: adminData.subscription.e_storage_mb, u: 0},
                    n_users: {t: adminData.subscription.users, u: 0},
                    s_cloud: {t: adminData.subscription.c_storage_mb, u: 0},
                }
                setMetrics(usevData);
            }
            
        }
    }
    useMemo(()=> {
        setInitUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminData]);
    return (
        <div className="StorageGraphsMain">
            <div className="PieGraphHolderStorageGraph">
                <div className="ProgressBarHolderStorageGraph">
                    <CircularProgressbarWithChildren
                        value={(metrics.s_cloud.u/metrics.s_cloud.t)*100}
                        styles={buildStyles(styleDrive)}
                    >
                        <div className="InnerContentHolderStorage">
                            <div className="IconHolderProgressCircular">
                                <span className="material-symbols-rounded">
                                    smb_share
                                </span>
                            </div>
                            <div className="PercentageHolderProgressCircular">
                                {
                                    `${Math.round((metrics.s_cloud.u/metrics.s_cloud.t)*100)}%`
                                }
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="TitlePieGraphStorageGraph">
                    Cloud Storage.
                </div>
                <div className="realStorageValueShowSection">
                    <div className="StorageValueDispalyStorageGraphs">
                        {
                            `${gbConvertion(metrics.s_cloud.u)} / ${gbConvertion(metrics.s_cloud.t)}`
                        }
                    </div>
                </div>
            </div>
            <div className="PieGraphHolderStorageGraph">
                <div className="ProgressBarHolderStorageGraph">
                    <CircularProgressbarWithChildren
                        value={(metrics.s_Email.u/metrics.s_Email.t)*100}
                        styles={buildStyles(styleEmail)}
                    >
                        <div className="InnerContentHolderStorage">
                            <div className="IconHolderProgressCircular">
                                <span className="material-symbols-rounded">
                                    mail
                                </span>
                            </div>
                            <div className="PercentageHolderProgressCircular">
                                {
                                    `${Math.round((metrics.s_Email.u/metrics.s_Email.t)*100)}%`
                                }
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="TitlePieGraphStorageGraph">
                    Email Storage.
                </div>
                <div className="realStorageValueShowSection">
                    <div className="StorageValueDispalyStorageGraphs">
                        {
                            `${gbConvertion(metrics.s_Email.u)} / ${gbConvertion(metrics.s_Email.t)}`
                        }
                    </div>
                </div>
            </div>
            <div className="PieGraphHolderStorageGraph">
                <div className="ProgressBarHolderStorageGraph">
                    <CircularProgressbarWithChildren
                        value={(metrics.n_users.u/metrics.n_users.t)*100}
                        styles={buildStyles(styleDrive)}
                    >
                        <div className="InnerContentHolderStorage">
                            <div className="IconHolderProgressCircular">
                                <span className="material-symbols-rounded">
                                    group
                                </span>
                            </div>
                            <div className="PercentageHolderProgressCircular">
                                {
                                    `${Math.round((metrics.n_users.u/metrics.n_users.t)*100)}%`
                                }
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="TitlePieGraphStorageGraph">
                    User Accounts
                </div>
                <div className="realStorageValueShowSection">
                    <div className="StorageValueDispalyStorageGraphs">
                        {
                            `${metrics.n_users.u} Created / ${metrics.n_users.t} Total Accounts`
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorageGraphs;
