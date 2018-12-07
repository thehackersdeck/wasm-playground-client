import React from 'react';

/**
 * Presentational component for action-bar action
 * 
 * @param {undefined}
 * @return {React.Component}
 */
const Action = (props) => {
    const classes = `action-bar-icon-list ${props.customClasses}`;

    return (
        <div className={classes}>
            <img src={props.icon} className="list-icon" alt={props.alt} />
            <span className="action-label">{props.title}</span>
        </div>
    );
};

export default Action;