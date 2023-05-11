import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './subcriptionSect.css';
// redux function
import { activatePopup } from '../../../../redux/action/popupActions';
// components
import Loadeffect from '../../Micros/Loadeffect';

function SubscriptionSect() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const sendSubscription = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {     
            setLoading(false);
            dispatch(activatePopup('info', { head: 'Success', text: 'You have successfully subscribed to BusinessSpace' }));
        }, 5000);
    }
    return (
        <div className="SubScriptionSectMain">
            <div className="SubNameNewsLater">Subscribe NewsLetter</div>
            <div className="SubInputAndAction">
                <form className="SubscriptionForm" onSubmit={(e) => sendSubscription(e)}>
                    <input required type="email" className="inputSubScribe" placeholder="Enter your Email" />
                    <button style={loading ? { display: 'none' } : {}} className="ButtonSubNewletter" type="submit">Submit</button>
                    <div  style={loading ? {} : { display: 'none' }}  className="LoadingEffectHolder">
                        <Loadeffect/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SubscriptionSect;
