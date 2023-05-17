import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './offences.css';
// static functions
import { sendToBackendPost } from '../../../sharedFunctions/apiCall';
// redux function
import { addAllOffences } from '../../../redux/action/offencesActions';
import { activatePopup, deactivatePopup } from '../../../redux/action/popupActions';
// components
import SideMoreInfo from './SideMoreInfo/SideMoreInfo';
import RowTableOffence from './Micro/RowTableOffence';
import AddVehicle from './AddVehicle/AddVehicle';
import _ from 'lodash';

function Offences() {
    const [vehiclesData, setVehilcesData] = useState('');
    const [viewState, setViewState] = useState('display');
    const [ownerDetails, setOwnerDetails] = useState('');
    const GenData = useSelector((state) => state.AdminReducer);
    const activeOwner = GenData.active_owner;
    const dispatch = useDispatch();
    
    const fetchOwnerVehicles = async (ownerid) => {
        const DataSend = {act: 'owner vehicles', owner_id: ownerid};
        dispatch(activatePopup('loading', { text: 'Loading data ...'}));
        const vehicles = await sendToBackendPost('/gatway/us.php', DataSend);
        dispatch(deactivatePopup());
        if (typeof (vehicles) === 'object' && typeof (vehicles.data) === 'object') {
            setVehilcesData(vehicles.data);
            dispatch(addAllOffences(vehicles.data));
        } else if (typeof (vehicles) === 'string') {
            dispatch(activatePopup('error', { head: 'Error', text: vehicles.data }));
        } else {
            dispatch(activatePopup('info', { head: 'Info!', text: 'No Vehicles Found' }));
            setVehilcesData('');
        }
    }
    const findOwnerDetails = (owner_id) => {
        const owners = GenData.data.owners.data;
        Object.keys(owners).map((owner) => {
            if (owner === owner_id) {
                setOwnerDetails(owners[owner]);
            }
            return true;
        });
    }
    useEffect(() => {
        if (activeOwner !== '') {
            fetchOwnerVehicles(activeOwner);
            findOwnerDetails(activeOwner);
        } else if (typeof (GenData.data) !== 'undefined' && typeof (GenData.data.vehicles) !== 'undefined' && typeof (GenData.data.vehicles.data) !== 'undefined') {
            setVehilcesData(GenData.data.vehicles.data);
            dispatch(addAllOffences(GenData.data.vehicles.data));
            setOwnerDetails('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeOwner, GenData]);
    return (
        <div className="OffencesMain">
            <div className="TopNavigatOffences">
                <div className="headSectionOffences">
                    <h1 className="headerOffences">
                        {
                            `${ownerDetails === '' ? 'Registered' : ownerDetails.fname+' '+ownerDetails.lname} Vehicles`
                        }
                    </h1>
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
                        <ul style={viewState === 'display' ? {} : { display: 'none' }} className="OffencesUnorderList">
                            {
                                typeof (vehiclesData) === 'object' && !_.isEmpty(vehiclesData)
                                ? Object.keys(vehiclesData).map((vehicle) => (
                                    <li className="liOffences" key={vehiclesData[vehicle].vehicle_id}>
                                        <RowTableOffence
                                            VehicleType={vehiclesData[vehicle].model}
                                            carNumber={vehiclesData[vehicle].license_no}
                                            VehicleId={vehiclesData[vehicle].vehicle_id}
                                            Manufature={vehiclesData[vehicle].manufacture}
                                        />
                                    </li>
                                ))
                                : (<h2 className="NoDatafoundHeader">No vehicles Found</h2>)
                            }
                        </ul>
                        <div  style={viewState !== 'display' ? {} : { display: 'none' }} className="CreateVehicleForm">
                            <AddVehicle />
                        </div>
                        <button onClick={() => setViewState('add')} type="button" style={activeOwner !== '' && viewState === 'display' ? {} : { display: 'none' }} className="AddVehicle">
                            <span className="material-symbols-rounded">
                                add
                            </span>
                        </button>
                        <button onClick={() => setViewState('display')} type="button" style={activeOwner !== '' && viewState !== 'display' ? {} : { display: 'none' }} className="AddVehicle">
                            <span className="material-symbols-rounded">
                                close
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
