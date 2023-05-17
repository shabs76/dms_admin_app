import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './clientComp.css';

// redux fun
import { changeViewSection, ChooseVehicles } from '../../../../../redux/action/adminActions';
// components
import ClientDispComp from './ClientDispComp';
import ClientEditComp from './ClientEditComp';

function ClientComp({
    bname, email, phone, IdType, Nvehicles, Nida, state, clientId,
}) {
    const dispatch = useDispatch();
    const [editState, setEditState] = useState(false);
    const activateEditnVehicles = (state) => {
        if (state === 'edit') {
            setEditState(true);
            return 0
        } else if (state === 'vehicles') {
            dispatch(changeViewSection('Plans'));
            dispatch(ChooseVehicles(clientId));
        }
    }
    const deactivateEdit = () => {
        setEditState(false);
    }
    return (
        <div className="ClientCompMainDiv">
            <div className="ClientInfoDispSectionClientComp" style={editState ? { display: 'none' } : {}}>
                <ClientDispComp
                    bname={bname}
                    email={email}
                    phone={phone}
                    Nvehicles={Nvehicles}
                    Nida={Nida}
                    state={state}
                    clientId={clientId}
                    IdType={IdType}
                    editFun={activateEditnVehicles}
                />
            </div>
            <div className="clientInfoEditSectionClientComp" style={editState ? {} :  { display: 'none' } }>
                <ClientEditComp
                    email={email}
                    phone={phone}
                    bname={bname}
                    IdType={IdType}
                    Nida={Nida}
                    closeEditFun={deactivateEdit}
                />
            </div>
        </div>
    );
}

ClientComp.propTypes = {
    bname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    IdType: PropTypes.string.isRequired,
    Nvehicles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    Nida: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    state: PropTypes.string.isRequired, 
    clientId: PropTypes.string.isRequired,
};

export default ClientComp;
