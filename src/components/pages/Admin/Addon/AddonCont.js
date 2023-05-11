import React, { useState } from 'react';
import './addonCont.css';
import AddonComp from './Section/AddonComp';
import CreateAddon from './Section/CreateAddon';

function AddonCont() {
    const [onViewSection, setOnViewSection] = useState('display');
    return (
        <div className="AddonContMain">
            <div className="AddonTopSectionAddonCont">
                <h2 className="SectionNameAddonCont">
                    System Admins
                </h2>
            </div>
            <div className="headingOnContentSectionAddonCont">
                <h3 className="HeadNameOnContentAddonCont">
                    Available System Admins
                </h3>
                <div className="ButtonNewOldHolderAddon">
                    <button className={`addonTypeSelector  ${onViewSection === 'display' ? 'allAddonButtonSelector' : 'newAddonButtonSelector'} `} type="button" onClick={() => setOnViewSection('display')}>All Admins</button>
                    <button className={`addonTypeSelector  ${onViewSection === 'display' ? 'newAddonButtonSelector' : 'allAddonButtonSelector'} `} type="button" onClick={() => setOnViewSection('create')}>Create New Admin</button>
                </div>
            </div>
            <div className="AddonHolderMain" style={ onViewSection === 'display' ? {} : { display : 'none' }}>
                <div className="AddonCompLoopHolder">
                    <AddonComp
                        addon_name="Malaki Msangi"
                        email="malaki.Msangi@gmail.com"
                        type="Main"
                        datez="2023-04-16"
                    />
                </div>
                <div className="AddonCompLoopHolder">
                    <AddonComp
                        addon_name="Happy Mzava"
                        email="mzava.happy@brentles.com"
                        type="normal"
                        datez="2023-04-16"
                    />
                </div>
                <div className="AddonCompLoopHolder">
                    <AddonComp
                        addon_name="Cladia John"
                        email="cloudia.john@brentles.com"
                        type="normal"
                        datez="2023-04-16"
                    />
                </div>
            </div>
            <div className="CreateNewAddonPrice" style={ onViewSection === 'display' ? { display : 'none' } : {}}>
                <h2 className="HeadCreateNewAddonPrice">Create New System Admin</h2>
                <div className="createNewAddonHolder">
                    <CreateAddon />
                </div>
            </div>
        </div>
    );
}

export default AddonCont;
