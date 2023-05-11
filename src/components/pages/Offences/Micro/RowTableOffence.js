import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './rowTableOffences.css';

// redux function
import { changeOnViewOffence } from '../../../../redux/action/offencesActions';

function RowTableOffence({
    VehicleType, carNumber, VehicleId, Manufature
}) {
    const dispatch = useDispatch();
    const activeId = useSelector((state) => state.OffenceReducer.activeOffence);
    const selectedRow = (id) => {
        dispatch(changeOnViewOffence(id));
    }
    return (
        <div className={`RowTablesOffences ${VehicleId === activeId ? 'activeOffenceRowTable' : ''}`} aria-hidden onClick={() => selectedRow(VehicleId)}>
            <div className="OffenceInfoRowTable">
                <div className="iconHolderDivOffences">
                    <span className="material-symbols-rounded">
                        airport_shuttle
                    </span>
                </div>
                <div className="NameOfOffencesRowTables"> 
                    <strong>
                        {
                            `${Manufature}:`
                        }
                    </strong>
                    <span>
                        {
                            VehicleType
                        }
                    </span>
                </div>
            </div>
            <div className="CarnumberRowTable">
                {
                    carNumber
                }
            </div>
        </div>
    );
}

RowTableOffence.propTypes = {
    VehicleType: PropTypes.string.isRequired,
    carNumber: PropTypes.string.isRequired,
    VehicleId: PropTypes.string.isRequired,
    Manufature: PropTypes.string.isRequired,
};

export default RowTableOffence;
