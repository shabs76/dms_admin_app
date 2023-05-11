import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sideBarCont.css';
// actions
import { changeViewSection } from '../../../../redux/action/adminActions';
// static Data 
import { AdminFunctions } from '../../../../sharedFunctions/adminFunctions';
// components
import CompanyUserInfo from './Sections/CompanyUserInfo';
import SideButton from './Sections/SideButton';


function SideBarCont() {
    const AdminState = useSelector((state) => state.AdminReducer);
    const dispatch = useDispatch();
    const actionChangeView = (funId) => {
        dispatch(changeViewSection(funId));
    }
    return (
        <div className="sidebarContainerMain">
            <div className="companyNUserInfoHolderSideBarCont">
                <CompanyUserInfo />
            </div>
            <div className="functionsButtonHolderSideBarAdmin">
                {
                    AdminFunctions.map((fun) => (
                        AdminState.showing_type === fun.type
                        ? (
                            <div key={fun.id} className="FunctionLoopHolderSideBarAdmin">
                                <SideButton
                                    BtName={fun.name}
                                    Icon={fun.icon}
                                    actionFun={actionChangeView}
                                    butnId={fun.id}
                                    activeState={AdminState.showing_view === fun.id ? true : false}
                                />
                            </div>
                        )
                        : ('')
                    ))
                }
            </div>
        </div>
    );
}

export default SideBarCont;
