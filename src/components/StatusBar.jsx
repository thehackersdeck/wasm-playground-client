import React from 'react';

/**
 * Presentational component for the status bar
 * 
 * @param {undefined}
 * @return {React.Component}
 */
const StatusBar = (props) => (
    <div className="wa-playground-status-bar">
        <React.Fragment>{props.children}</React.Fragment>
    </div>
);

export default StatusBar;