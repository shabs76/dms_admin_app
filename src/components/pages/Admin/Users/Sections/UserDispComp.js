import React from 'react';
import PropTypes from 'prop-types';
import './userDispComp.css';
// shared functions
import { convertSize } from '../../../../../sharedFunctions/storageConvent';

function UserDispComp({
    Fname, Lname, email, phone, Estorage, Dstorage, editFun,
}) {
    return (
        <div className="UserDispCompMain">
            <div className="UserDispContentHolder">
                <div className="ImagLatterProfileHolderUserDisp">
                    <h1 className="ImagLatterProfileUserDisp">
                        {
                            Fname.slice(0,1)
                        }
                    </h1>
                </div>
                <div className="userNameSectionUserDispComp">
                    <h2 className="userNameUserDispComp">
                        {
                            `${Fname} ${Lname}`
                        }
                    </h2>
                </div>
                <ul className="UserDetailsListUserDispComp">
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Email:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                email
                            }
                        </div>
                    </li>
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Phone:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                phone
                            }
                        </div>
                    </li>
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Cloud Storage:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                convertSize(Dstorage)
                            }
                        </div>
                    </li>
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Email Storage:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                convertSize(Estorage)
                            }
                        </div>
                    </li>
                </ul>
                <div className="ButtonActsUserDispComp">
                    <button className="UserDispButtons editButtonUserDisp" type="button" onClick={() => editFun()}>
                        <span className="material-symbols-rounded">
                            edit
                        </span>
                    </button>
                    <button className="UserDispButtons" type="button">
                        <span className="material-symbols-rounded">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

UserDispComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    Estorage: PropTypes.number.isRequired,
    Dstorage: PropTypes.number.isRequired,
    editFun: PropTypes.func.isRequired,
};

export default UserDispComp;
