/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './admin.css';
// static  Data
import { AdminFunctions } from '../../../sharedFunctions/adminFunctions';
// api call function
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// redux function
import { activatePopup } from '../../../redux/action/popupActions';
import { addAdminData } from '../../../redux/action/adminActions';
// components
import SideBarCont from './SideBar/SideBarCont';

function Admin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AdminState = useSelector((state) => state.AdminReducer);

    const getAdminData = async () => {
        const adminData = await sendToBackendPost('/gatway/us.php', { act: 'get_data' });
        console.log(adminData);
        if (typeof (adminData) === 'object' && adminData['state'] === 'error') {
            if (typeof (adminData['data']) === 'string' && adminData['data'] === 'not login') {
                navigate('/');
            } else if (typeof (adminData['data']) === 'string') {
                dispatch(activatePopup('error', { head: 'Error!', text: adminData['data'] }));
            } else {
                dispatch(activatePopup('error', { head: 'Error!', text: 'Unable to get admin data. Please refresh the page' }));
            }
        } else if (typeof (adminData) === 'object' && adminData['state'] === 'success') {
            dispatch(addAdminData(adminData['data']));
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        getAdminData();
    }, []);
    return (
        <div className="AdminMainDiv">
            <div className="AdminContentHolder">
                <div className="AdminPicSideBarHolder">
                    <SideBarCont />
                </div>
                <div className="AdminMobSideBarPullButtnHolder">
                    <button className="AdminMobSideBarPullButtn" type="button">
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                </div>
                <div className="AdminMobSiderBarHolder">
                    <SideBarCont />
                </div>
                <div className="ActionsContentHolderAdmin">
                    {
                        AdminFunctions.map((fun) => (
                            AdminState.showing_type === fun.type
                            ? (
                                <div style={AdminState.showing_view === fun.id ? { display: 'block' } : {}} className="ActionloopHolderCompAdmin" key={`${fun.id}_CompAction`}>
                                    {
                                        fun.comp
                                    }
                                </div>
                            )
                            : ('') 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;
