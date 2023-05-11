import React from 'react';
import PropTypes from 'prop-types';
import './addonComp.css';


function AddonComp({
    addon_name, email, type, datez
}) {
    return (
        <div className="AddonCompMain">
            <div className="addonCompTopSect">
                <h3 className="addonCompNameSect">
                    {
                        addon_name
                    }
                </h3>
            </div>
            <ul className="MainListAddonFeatures">
                <li className="ListItemAddonFeature">
                    <div className="ItemTitleAddonComp">
                        Email:
                    </div>
                    <div className="ItemValueAddonComp">
                        {
                            email
                        }
                    </div>
                </li>
                <li className="ListItemAddonFeature">
                    <div className="ItemTitleAddonComp">
                        Types:
                    </div>
                    <div className="ItemValueAddonComp">
                        {
                            type
                        }
                    </div>
                </li>
                <li className="ListItemAddonFeature">
                    <div className="ItemTitleAddonComp">
                        Created Date:
                    </div>
                    <div className="ItemValueAddonComp">
                        {
                            datez
                        }
                    </div>
                </li>
            </ul>
            <div className="AddonButtonHolder">
                <button className="ButtonAddonComp" type="button">
                    <span className="material-symbols-rounded">
                        edit
                    </span>
                </button>
                <button className="ButtonAddonComp deleteAddonCompButtn" type="button">
                    <span className="material-symbols-rounded">
                        delete
                    </span>
                </button>
            </div>
        </div>
    );
}

AddonComp.propTypes = {
    addon_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    datez: PropTypes.string.isRequired,
};

export default AddonComp;