import React from 'react';
import PropTypes from 'prop-types';
import './clientDispComp.css';

function ClientDispComp({
    bname, email, phone, Nvehicles, Nida, state, IdType, editFun, clientId,
}) {
    console.log(clientId);
    return (
        <div className="ClientDispCompMain">
            <div className="ClientDispContentHolder">
                <div className="ImagLatterProfileHolderClientDisp">
                    <h1 className="ImagLatterProfileClientDisp">
                        {
                            bname.slice(0,1)
                        }
                    </h1>
                </div>
                <div className="ClientNameSectionClientDispComp">
                    <button className="clientButtonViewDispComp" type="button" onClick={() => editFun('vehicles')}>Vehicles</button>
                    <h2 className="ClientNameClientDispComp">
                        {
                            bname 
                        }
                    </h2>
                </div>
                <ul className="ClientDetailsListClientDispComp">
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            Email:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                email
                            }
                        </div>
                    </li>
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            Phone:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                phone
                            }
                        </div>
                    </li>
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            Identification:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                Nida
                            }
                        </div>
                    </li>
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            ID Type:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                IdType
                            }
                        </div>
                    </li>
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            Number of Vehicles:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                Nvehicles
                            }
                        </div>
                    </li>
                    <li className="ClientDetailListClientDispComp">
                        <div className="ClientDetailTitleClientDispComp">
                            State:
                        </div>
                        <div className="ClientDetailValueClientDispComp">
                            {
                                state
                            }
                        </div>
                    </li>
                </ul>
                <div className="ButtonActsClientDispComp">
                    <button className="ClientDispButtons editButtonClientDisp" type="button" onClick={() => editFun('edit')}>
                        <span className="material-symbols-rounded">
                            edit
                        </span>
                    </button>
                    <button className={`ClientDispButtons ${state !== 'active' ? 'freezeButtonClientDispActive' : 'freezeButtonClientDisp'}`} type="button">
                        <span className="material-symbols-rounded">
                            ac_unit
                        </span>
                    </button>
                    <button className="ClientDispButtons" type="button">
                        <span className="material-symbols-rounded">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

ClientDispComp.propTypes = {
    bname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    Nida: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    Nvehicles: PropTypes.number.isRequired,
    editFun: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    IdType: PropTypes.string.isRequired,
};

export default ClientDispComp;
