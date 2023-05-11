import React, { useState, useMemo } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import './paymentsCont.css';
// components
import ReceiptCont from './Sections/ReceiptCont';

function PaymentsCont() {
    const adminData = useSelector((state) => state.AdminReducer.data);
    const [subScrip, setSubScrip] = useState({});
    const [payments, setPayments] = useState({});
    const [dat, setDat] = useState('No data');
    const setInitPayment = () => {
        if (typeof (adminData.payments) === 'object' && !_.isEmpty(adminData.payments)) {
            setPayments(adminData.payments);
            
        }
    }
    const setInitSubscription = () => {
        if (typeof (adminData.subscription) === 'object' && !_.isEmpty(adminData.subscription)) {
            setSubScrip(adminData.subscription);
            setDat(adminData.subscription.expire_date);
        }
    }
    useMemo(()=> {
        setInitPayment();
        setInitSubscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminData]);
    return (
        <div className="PaymentsContMain">
            <div className="PaymentTopSectionPaymentCont">
                <h2 className="SectionNamePaymentCont">
                    Payment History.
                </h2>
                <div className="ExpiringDateOfSubscription">
                    <div className="TitleExpireDate">
                        Subscription Expiring Date: 
                    </div>
                    <div className="ExperingDatevaluePayment">
                        {
                            dat
                        }
                    </div>
                </div>
            </div>
            <div className="PaymentReceiptHolder">
                <h3 className="PaymentRecieptsHeader">
                    Your Payment Receipts
                </h3>
                <div className="PaymentActionButtonsHolder" style={{ display: 'none' }}>
                    <button className="PaymentActionButton" type="button">
                        All Payments
                    </button>
                    <button className="PaymentActionButton NewPaymentButtonPaymentCon" type="button">
                        Active Payments
                    </button>
                </div>
                <div className="PaymentReceiptContHolder">
                    {
                    !_.isEmpty(payments)
                    ? Object.keys(payments).map((payId) => (
                        <div className="ReceiptLoopHolder" key={payments[payId].payment_id}>
                            <ReceiptCont
                                PlanName={payments[payId].plan_name}
                                Amount={payments[payId].amount}
                                Date={payments[payId].payment_date}
                                PayMethod={payments[payId].payment_method}
                                PhoneNum={payments[payId].purchasor_phone}
                                PayMethodAcc={payments[payId].payment_account}
                                T_e_Storage={subScrip.e_storage_mb}
                                T_users={subScrip.users}
                                T_c_Storage={subScrip.c_storage_mb}
                                activeState="Active"
                            />
                        </div>
                    ))
                    : (<div className="NousersUserContMain">
                        No payments
                    </div>)
                }
                </div>
            </div>
        </div>
    );
}

export default PaymentsCont;
