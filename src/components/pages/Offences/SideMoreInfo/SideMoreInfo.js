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
                url = Offences[offenc].Image;
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
                            <img src={Offence.Owner.passport} className="driverImgSideMore" alt="driver passport size" />
                            <h2 className="DriverNameSideInfo">{Offence.Owner.name}</h2>
                        </div>
                        <div className="driverInfoTextHolder">
                            <div className="driverInfoSideMore">
                                <strong>
                                    ID:
                                </strong>
                                <span>
                                    {
                                        Offence.Owner.Id
                                    }
                                </span>
                            </div>
                            <div className="driverInfoSideMore">
                                <strong>
                                    ID Type:
                                </strong>
                                <span>
                                    {
                                        Offence.Owner.id_type
                                    }
                                </span>
                            </div>
                            <div className="driverInfoSideMore">
                                <strong>
                                    Phone:
                                </strong>
                                <span>
                                    {
                                        Offence.Owner.phone
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
                                value={Offence.Manufacture}
                            />
                            <RowSideBar
                                Name="Model:"
                                value={Offence.VehicleType}
                            />
                            <RowSideBar
                                Name="Chassis No:"
                                value={Offence.ChasisNum}
                            />
                            <RowSideBar
                                Name="Engine No:"
                                value={Offence.EngineNum}
                            />
                            <RowSideBar
                                Name="License No:"
                                value={Offence.carnumber}
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
