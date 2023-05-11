import React from 'react';
import StorageGraphs from '../AddUsers/Sections/StorageGraphs';
import './metricMain.css';

function MetricMain(props) {
    return (
        <div className="MetricMainDiv">
            <div className="MetricTopSection">
                <h2 className="MetricHeader">
                    Accounts Metrics
                </h2>
            </div>
            <div className="MetricsHolder">
                <StorageGraphs />
            </div>
        </div>
    );
}

export default MetricMain;