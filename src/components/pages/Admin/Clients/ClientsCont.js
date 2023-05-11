import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import './clientsCont.css';
// components
import TextSearch from '../Inputs/TextSearch';
import ClientComp from './Sections/ClientComp';

function ClientsCont() {
    const AdminData = useSelector((state) => state.AdminReducer.data);
    const searchClients = (val) => {
        console.log(val);
    }
    const clients = {
        state: 'empty',
        data: {}
    }
    if (typeof (AdminData.owners) === 'object' && !_.isEmpty(AdminData.owners)) {
        clients.state = AdminData.owners.state;
        clients.data = AdminData.owners.data;
    }
    return (
        <div className="ClientsContMain">
            <div className="ClientTopSectionClientCont">
                <h2 className="SectionNameClientCont">
                    Registered Owners
                </h2>
                <div className="searchSectionHolderClientCont">
                    <TextSearch
                        PlaceHolder="Search for clients: business names"
                        defaultVal=""
                        searchFun={searchClients}
                    />
                </div>
            </div>
            <div className="ClientsCompLoopHolderClientCont">
                {
                    typeof (clients.data) === 'object' && !_.isEmpty(clients.data)
                    ? Object.keys(clients.data).map((client_id) => (
                        <div className="ClientCompLoopHolderClientCont" key={clients.data[client_id].client_id} >
                            <ClientComp
                                bname={`${clients.data[client_id].fname} ${clients.data[client_id].lname}`}
                                email={clients.data[client_id].email}
                                phone={`+${clients.data[client_id].phone_number}`}
                                Nvehicles={0}
                                Nida={clients.data[client_id].id_no}
                                state={clients.data[client_id].state}
                                IdType={clients.data[client_id].id_type}
                                clientId={clients.data[client_id].owner_id}
                            />
                        </div>
                    ))
                    : (<div>No data</div>)
                }
            </div>
        </div>
    );
}

export default ClientsCont;
