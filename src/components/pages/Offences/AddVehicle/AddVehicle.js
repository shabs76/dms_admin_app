import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import './addVehicle.css';
// static function
import { sendToBackendPost } from '../../../../sharedFunctions/apiCall';
// redux function
import { activatePopup, deactivatePopup } from '../../../../redux/action/popupActions';
// components
import TextInputBlock from '../../../subPages/Micros/TextInputBlock';
import Loadeffect from '../../../subPages/Micros/Loadeffect';

function AddVehicle() {
    const imageCont = useSelector((state) => state.CropReducer);
    const owner_id = useSelector((state) => state.AdminReducer.active_owner);
    const imgInpt = useRef(null);
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const [imgDispState, setImgDispState] = useState('');
    const getvaluesForm = (Inputname, value) => {
        const tempFormVal = formValues;
        // check if it the check value
        if (typeof (value) === 'boolean') {
            if(value) {
                tempFormVal[Inputname] = 'yes';
            } else {
                delete tempFormVal[Inputname];
            }
        } else {
            tempFormVal[Inputname] = value;
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const submitForm = async(e) => {
        e.preventDefault();
        
        // send info to the back and wait for response to go to verify.
        const formDat = new FormData();
        if (typeof (formValues) !== 'object' || _.isEmpty(formValues)) {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Insert data in all fields' }));
            return 1;
        } else if (typeof (formValues.image) === 'undefined') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Vehicle picture is required' }));
            return 1;
        }
        formDat.append('act', 'create vehicle');
        formDat.append('owner_id', owner_id);
        Object.keys(formValues).map((inputName) => {
            formDat.append(inputName, formValues[inputName]);
            return true;
        });
        setLoadingState(true);
        const ansbck = await sendToBackendPost('/gatway/us.php', formDat);
        setLoadingState(false);
        if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success!', text: 'Vehicle details were added successfully' }));
        } else if (typeof (ansbck) === 'object' && ansbck.state === 'error') {
            dispatch(activatePopup('error', { head: 'Error!', text: ansbck.data }));
        } else {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Server internal error' }));
        }
        
    }
    const saveCropedImg = () => {
        imgInpt.current.value = '';
        dispatch(deactivatePopup());
    }


    const captureImgInp = (inp) => {
        /// this is special for profile pic where crop is required
        const reader = new FileReader();
        reader.onload = () => {
            const dataURL = reader.result;
            dispatch(activatePopup(
                'croppImageFlex',
                {
                    minorFun: () => captureImgInp(inp),
                    MinorButnName: 'Re-edit',
                    MainFun: () => saveCropedImg(),
                    MainButnName: 'Save & Continue',
                    MainIconName: 'arrow_forward',
                    imageData: dataURL,
                    ImageTitle: 'Vehicle Picture',
                },
            ));
        };
        reader.readAsDataURL(inp.target.files[0]);
        return true;
    };
    const OpenFiles = () => {
        imgInpt.current?.click();
    }
    const effectAddImg = async () => {
        console.log(imageCont.croppedData.urldata);
        const TempForm = formValues;
        const upImageFile = await fetch(
            imageCont.croppedData.urldata,
        ).then((r) => r.blob());
        TempForm.image = new File([upImageFile], `${imageCont.ImageTitle}.jpeg`, { type: upImageFile.type, lastModified: Date.now() });
        setFormValues({
            ...TempForm,
        });
        console.log(imageCont.croppedData.urldata);
        setImgDispState(imageCont.croppedData.urldata);
    }
    
    useEffect(() => {
        effectAddImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageCont.croppedData.urldata])
    return (
        <div className="addVehiclesMain">
            <h2 className="FormHeaderAddVehicle">
                Add New Vehicle
            </h2>
            <div className="addFormAddVehicle">
                <form onSubmit={(e) => submitForm(e)} className="formAddvehicles">
                    <TextInputBlock
                        InputName="manufacture"
                        LabelName="Manufacture"
                        placeHolder="eg. Toyota"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'manufacture' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="body_type"
                        LabelName="Body Type"
                        placeHolder="eg. truck"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'body_type' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="model"
                        LabelName="Model"
                        placeHolder="eg. RAV 4"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'model' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="license_no"
                        LabelName="License Number"
                        placeHolder="eg. T456 DEM"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'license_no' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="chassis_no"
                        LabelName="Chassis Number"
                        placeHolder="eg. T7645JHG6353Bg"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'chassis_no' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="engine_no"
                        LabelName="Engine Number"
                        placeHolder="eg. GGf76stT7645JHG6353Bg"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'engine_no' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="password"
                        LabelName="Confirmation Password"
                        placeHolder="Password"
                        Type="password"
                        InputStyleClass={InputClassvals.inputName === 'password' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="vehiclePictureHolder">
                        <h3 className="AddVehiclePictureHeader">Vehicle Picture</h3>
                        <input style={{ display: 'none' }}  type="file" ref={imgInpt} name="image1" accept="image/*" onChange={(e) => captureImgInp(e)} />
                        <div style={{ backgroundImage: `url(${imgDispState})` }} className="VehiclePictureBack" onClick={() => OpenFiles()}>
                            <button type="button" className="AddvehicleButton">
                                <span className="material-symbols-rounded">
                                    add
                                </span>
                            </button>
                        </div>
                    </div>
                    <div style={!loadingState ? {} : { display: 'none' }} className="SubmitButtonHolder">
                        <button type="submit" className="SubmitButtonAddVehicle">
                            Add Vehicle
                        </button>
                    </div>
                    <div className="LoadingAddVehicle" style={loadingState ? {} : { display: 'none' }}>
                        <div className="loadingHolder">
                            <Loadeffect />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddVehicle;
