import React from 'react';
import './addUsersCont.css';
// components
import AddUserForm from './Sections/AddUserForm';


function AddUsersCont() {
    return (
        <div className="AddUsersContMain">
            <div className="UserTopSectionAddUserCont">
                <h2 className="SectionNameAddUserCont">
                    Register New Vehicle Owner
                </h2>
            </div>
            <div className="AddUserContFormHolder">
                <AddUserForm />
            </div>
        </div>
    );
}

export default AddUsersCont;