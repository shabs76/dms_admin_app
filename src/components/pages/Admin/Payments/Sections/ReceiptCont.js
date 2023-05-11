import React from 'react';
import PropTypes from 'prop-types';
import './receiptCont.css';


function ReceiptCont({
    PlanName, Amount, Date, PayMethod, PhoneNum, PayMethodAcc, T_e_Storage, T_users, T_c_Storage, activeState,
}) {
    return (
        <div className="receiptContMain">
            <div className="TopSectionGenDetailsReceiptCont">
                <div className="IconDollarHolder">
                    <span className="material-symbols-rounded">
                        local_mall
                    </span>
                </div>
                <h2 className="PlanPaidForReceipt">
                    {
                        PlanName
                    }
                </h2>
                <div className="activeStateDispText">
                    {
                        activeState
                    }
                </div>
                <div className="PaymentAmountContainerReceipt">
                    <h1 className="PaymentAmountValueReceipt">
                        {
                            `$${Amount}`
                        }
                    </h1>
                </div>
                <div className="PaymentDetailsReceipt">
                    Any service addition to the plan will have its own receipt.
                </div>
            </div>
            <div className="TrasanctionDetailsReceipt">
                <h3 className="TransactionDetailsHead">
                    Transaction Details.
                </h3>
                <div className="TransactionDetailsHolderReceipt">
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Date</div>
                        <div className="DetailValueReceipt">
                            {
                                Date
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Phone</div>
                        <div className="DetailValueReceipt">
                            {
                                PhoneNum
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Payment Method</div>
                        <div className="DetailValueReceipt">
                            {
                                PayMethod
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Email Storage</div>
                        <div className="DetailValueReceipt">
                            {
                                `${T_e_Storage}GB`
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Cloud Storage</div>
                        <div className="DetailValueReceipt">
                            {
                                `${T_c_Storage}GB`
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Number of Users</div>
                        <div className="DetailValueReceipt">
                            {
                                T_users
                            }
                        </div>
                    </div>
                    <div className="TransactionDetailMainDiv">
                        <div className="DetailNameReceipt">Paid Through</div>
                        <div className="DetailValueReceipt">
                            {
                                PayMethodAcc
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReceiptCont.propTypes = {
    PlanName: PropTypes.string.isRequired,
    Amount: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
    PayMethod: PropTypes.string.isRequired,
    PhoneNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    PayMethodAcc: PropTypes.string.isRequired,
    T_c_Storage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    T_e_Storage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    T_users: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    activeState: PropTypes.string.isRequired,
};

export default ReceiptCont;
