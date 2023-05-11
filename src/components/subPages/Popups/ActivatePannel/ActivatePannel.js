import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './activatePannel.css';
// redux function
import { deactivatePopup, activatePopup } from '../../../../redux/action/popupActions';
// components
import InfoActivatePannel from './micro/InfoActivatePannel';

function ActivatePannel({ clientData }) {
    console.log(clientData);
    const dispatch = useDispatch();
    const activateClient = () => {
        const data = {
            act: 'activate client',
            clientId: clientData.client_id,
        }
        dispatch(activatePopup('pass_confirm', { data, link: '/gatway/us.php' }));
    }
    return (
        <div className="ActivatePannelMain">
            <div className="TopSectActivatePannel">
                <div className="imageSectTopSec">
                    <div className="ImageHolderActivatePannel">
                        {
                            clientData.business_name.slice(0,1)
                        }
                    </div>
                </div>
                <div className="textSectTopSectActivPannel">
                    <h4 className="HeadTopsecActivatPanl">{clientData.business_name}</h4>
                    <div className="textTopSectActivatePannel">
                        {
                            clientData.region
                        }
                    </div>
                </div>
            </div>
            <div className="InfoSectActivatePannel">
                <InfoActivatePannel
                    icon='dns'
                    Name={`${clientData.domain_name}: ${clientData.domain_state}`}
                />
                <InfoActivatePannel
                    icon='request_quote'
                    Name={`$${clientData.price}`}
                />
                <InfoActivatePannel
                    icon='payments'
                    Name={`${clientData.subState}`}
                />
            </div>
            <div className="buttonHolderActivatePannel">
                <button onClick={() => dispatch(deactivatePopup())} className="ButtonActivatePannel cancelButtonActivePannel">Cancel</button>
                <button className="ButtonActivatePannel" onClick={() => activateClient()}>Activate</button>
            </div>
        </div>
    );
}

ActivatePannel.propTypes = {
    clientData: PropTypes.object.isRequired,
}

export default ActivatePannel;
