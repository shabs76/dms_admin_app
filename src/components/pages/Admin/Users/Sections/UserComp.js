import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserDispComp from './UserDispComp';
import UserEditComp from './UserEditComp';


function UserComp({
    Fname, Lname, email, phone, Estorage, Dstorage, UserId,
}) {
    const [editState, setEditState] = useState(false);
    const activateEdit = () => {
        setEditState(true);
    }
    const deactivateEdit = () => {
        setEditState(false);
    }
    return (
        <div className="UserCompMainDiv">
            <div className="userInfoDispSectionUserComp" style={editState ? { display: 'none' } : {}}>
                <UserDispComp
                    Fname={Fname}
                    Lname={Lname}
                    email={email}
                    phone={phone}
                    Estorage={Estorage}
                    Dstorage={Dstorage}
                    editFun={activateEdit}
                />
            </div>
            <div className="userInfoEditSectionUserComp" style={editState ? {} :  { display: 'none' } }>
                <UserEditComp
                    Fname={Fname}
                    Lname={Lname}
                    phone={phone}
                    Estorage={Estorage}
                    Dstorage={Dstorage}
                    dispFun={deactivateEdit}
                    UserId={UserId}
                />
            </div>
        </div>
    );
}

UserComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    Estorage: PropTypes.number.isRequired,
    Dstorage: PropTypes.number.isRequired,
    UserId: PropTypes.string.isRequired,
};

export default UserComp;
