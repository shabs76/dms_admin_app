import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import './sideMoreInfo.css';
// components
import RowSideBar from '../Micro/RowSideBar';

function SideMoreInfo() {
    const OffenceData = useSelector((state) => state.OffenceReducer);
    const Offences = OffenceData.offences;
    const OffenceIdactv = OffenceData.activeOffence;

    let Offence = {};
    let url = '';
    const checkActiveOffence = () => {
        if (_.isEmpty(Offences)) return false;
        
        Object.keys(Offences).map((offenc) => {
            if (offenc === OffenceIdactv) {
                Offence = Offences[offenc];
                url = Offences[offenc].vehicle_photo;
            }
            return true;
        });
    }

    checkActiveOffence();
    if(!_.isEmpty(Offence)) {
        return (
            <div className="SideMoreInfoMain">
                <div className="sideVieoHolder">
                    <img src={url} alt="vehicle" className="VehicleImageSideMoreInfo" />
                </div>
                <div className="sideBarMoreInfo">
                    <div className="driverInfoSideMoreInfo">
                        <div className="driverImageHolderSideMore">
                            <img src={Offence.owner_photo} className="driverImgSideMore" alt="driver passport size" />
                            <h2 className="DriverNameSideInfo">{`${Offence.fname} ${Offence.lname}`}</h2>
                        </div>
                        <div className="driverInfoTextHolder">
                            <div className="driverInfoSideMore">
                                <strong>
                                    ID:
                                </strong>
                                <span>
                                    {
                                        Offence.id_no
                                    }
                                </span>
                            </div>
                            <div className="driverInfoSideMore">
                                <strong>
                                    ID Type:
                                </strong>
                                <span>
                                    {
                                        Offence.id_type
                                    }
                                </span>
                            </div>
                            <div className="driverInfoSideMore">
                                <strong>
                                    Phone:
                                </strong>
                                <span>
                                    {
                                        Offence.phone_number
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="OtherInfoSideMoreInfo">
                        <h2 className="InfoSectSideMoreInfo">Vehicle Info</h2>
                        <div className="otherListHolder">
                            <RowSideBar
                                Name="Manufature:"
                                value={Offence.manufacture}
                            />
                            <RowSideBar
                                Name="Model:"
                                value={Offence.model}
                            />
                            <RowSideBar
                                Name="Chassis No:"
                                value={Offence.chassis_no}
                            />
                            <RowSideBar
                                Name="Engine No:"
                                value={Offence.engine_no}
                            />
                            <RowSideBar
                                Name="License No:"
                                value={Offence.license_no}
                            />
                        </div>
                    </div>
                    <div className="buttonLocationHolder">
                        <button className="ViewLocationButton" type="button">Delete Vehicle</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="NoDataFoundsideMoreInfo">
                <h2 className="NoDataHeaderSideMoreInfo">Select Vehicle</h2>
            </div>
        );
    }
}

export default SideMoreInfo;
