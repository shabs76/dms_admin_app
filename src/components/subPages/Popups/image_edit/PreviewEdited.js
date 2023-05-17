import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './previewEdited.css';

function PreviewEdited({
    buttn1Name, buttn2Name, buttn1Fun, buttn2Fun, iconMainName,
}) {
    const imageCont = useSelector((state) => state.PopupReducer.data);
    const croppedImg = useSelector((state) => state.CropReducer.croppedData);
    return (
        <div className="editedMainPreviewMain">
            <div className="imageHolder">
                <img src={croppedImg.urldata} className="imageTagPreviewEdited" alt="Edited" />
            </div>
            <div className="titleEditedMainImage">
                {imageCont.ImageTitle}
            </div>
            <div className="controlsEdited">
                <button type="button" className="secondClassPreviewEditedMain" onClick={() => buttn1Fun()}>
                    {buttn1Name}
                </button>
                <button type="button" className="firstClassPreviewEditedMain" onClick={() => buttn2Fun()}>
                    <span className="buttonTextPreviewEditedImages">{buttn2Name}</span>
                    <div className="iconButtonHolderEditedImages">
                        <span className="material-symbols-rounded">
                            {iconMainName}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
}

PreviewEdited.propTypes = {
    buttn1Fun: PropTypes.func,
    buttn2Fun: PropTypes.func,
    buttn1Name: PropTypes.string,
    buttn2Name: PropTypes.string,
    iconMainName: PropTypes.string,
};

PreviewEdited.defaultProps = {
    buttn1Fun: () => {},
    buttn2Fun: () => {},
    buttn1Name: '',
    buttn2Name: '',
    iconMainName: '',
};

export default PreviewEdited;
