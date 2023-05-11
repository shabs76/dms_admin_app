import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import './usersCont.css';
// components
import TextSearch from '../Inputs/TextSearch';
import UserComp from './Sections/UserComp';
import _ from 'lodash';

function UsersCont() {
    const adminData = useSelector((state) => state.AdminReducer.data);
    const [users, setUsers] = useState({});
    const setInitUser = () => {
        if (typeof (adminData.users) === 'object' && !_.isEmpty(adminData.users)) {
            setUsers(adminData.users);
        }
    }
    useMemo(()=> {
        setInitUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminData]);


    const searchUsers = (val) => {
        if (val.replace(/\s/g, '') !== '' && !_.isEmpty(users)) {
            // searchKey is not empty and charts are not empty
            const newTextsObject = {};
            for (const property in users) {
                if (Object.prototype.hasOwnProperty.call(users, property)) {
                    // time to check if name with value exist
                    if (typeof (users[property].email) === 'string' && users[property].email.toLowerCase().startsWith(val.toLowerCase())) {
                        newTextsObject[property] = users[property];
                    }
                }
            }
            setUsers(newTextsObject);
        } else if (val.replace(/\s/g, '') === '' && typeof (adminData.users) === 'object' && !_.isEmpty(adminData.users)) {
            setUsers(adminData.users);
        }
    }
    return (
        <div className="UserContMain">
            <div className="UserTopSectionUserCont">
                <h2 className="SectionNameUserCont">
                    Registered Users
                </h2>
                <div className="searchSectionHolder">
                    <TextSearch
                        PlaceHolder="Search for Users: email"
                        defaultVal=""
                        searchFun={searchUsers}
                    />
                </div>
            </div>
            <div className="headingOnContentSectionUserCont">
                <h3 className="HeadNameOnContentUserCont">
                    Available Users
                </h3>
            </div>
            <div className="UsersHolderContainerUserCont">
                {
                    !_.isEmpty(users)
                    ? Object.keys(users).map((userId) => (
                        <div className="UserCompLoopHolderUserCont" key={users[userId].user_id}>
                            <UserComp
                                Fname={users[userId].fname}
                                Lname={users[userId].lname}
                                email={users[userId].email}
                                phone={`+${users[userId].phone}`}
                                Estorage={users[userId].e_storage_mb}
                                Dstorage={users[userId].c_storage_mb}
                                UserId={users[userId].user_id}
                            />
                        </div>
                    ))
                    : (<div className="NousersUserContMain">
                        No users
                    </div>)
                }
            </div>
        </div>
    );
}

export default UsersCont;
