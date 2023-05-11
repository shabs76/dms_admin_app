import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './offences.css';
// import fake data
import { offencesData } from './offencesData';
// redux function
import { addAllOffences } from '../../../redux/action/offencesActions';
// components
import SideMoreInfo from './SideMoreInfo/SideMoreInfo';
import RowTableOffence from './Micro/RowTableOffence';

function Offences() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(addAllOffences(offencesData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="OffencesMain">
            <div className="TopNavigatOffences">
                <div className="headSectionOffences">
                    <h1 className="headerOffences">Registered Vehicles</h1>
                </div>
            </div>
            <div className="contentOffencesHolder">
                <div className="OffencesHoldersTableAndView">
                    <div className="OffencesHoldersTable">
                        <div className="ContentSearchOffences">
                            <div className="SearchInputBoxOffences">
                                <input type="text" className="searchIpuntOffences" placeholder="Search Vehicle: License Plate" />
                                <button className="searchButtonOffences">
                                    <span className="material-symbols-rounded">
                                        search
                                    </span>
                                </button>
                            </div>
                        </div>
                        <ul className="OffencesUnorderList">
                            {
                                Object.keys(offencesData).map((vehicle) => (
                                    <li className="liOffences" key={offencesData[vehicle].VehicleId}>
                                        <RowTableOffence
                                            VehicleType={offencesData[vehicle].VehicleType}
                                            carNumber={offencesData[vehicle].carnumber}
                                            VehicleId={offencesData[vehicle].VehicleId}
                                            Manufature={offencesData[vehicle].Manufacture}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="AddVehicle">
                            <span className="material-symbols-rounded">
                                add
                            </span>
                        </button>
                    </div>
                    <div className="OffencesHoldersView">
                        <SideMoreInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offences;
