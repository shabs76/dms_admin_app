import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './textSearch.css';
// action functions
import { activatePopup } from '../../../../redux/action/popupActions';
// functions
import checkIfNotEmptyText from '../../../../sharedFunctions/checkIfNotEmpty';


function TextSearch({
    PlaceHolder, defaultVal, searchFun
}) {
    const dispatch = useDispatch();
    const [currentVal, setCurrentVal] = useState('');
    const submitSearchValue = (e) => {
        e.preventDefault();
        if(checkIfNotEmptyText(currentVal)) {
            searchFun(currentVal);
        } else {
            //  dispatch error info
            const data = {
                text: 'You need to insert name or email to search',
                head: 'Error!',
            }
            dispatch(activatePopup('error', data));
        }
    }
    const onChangeTakeval = (val) => {
        setCurrentVal(val);
        searchFun(val);
    }
    return (
        <div className="TextSearchMainDiv">
            <form className="formSearchText" onSubmit={(e) => submitSearchValue(e)}>
                <div className="contentTextSearch">
                    <input type="text" placeholder={PlaceHolder} defaultValue={defaultVal} onChange={(e) => onChangeTakeval(e.target.value)} className="inputTextSearch" />
                    <button type="submit" className="SubmitTextSearchButton">
                        <span className="material-symbols-rounded">
                            search
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}

TextSearch.propTypes = {
    PlaceHolder: PropTypes.string.isRequired,
    defaultVal: PropTypes.string.isRequired,
    searchFun: PropTypes.func.isRequired,
};

export default TextSearch;