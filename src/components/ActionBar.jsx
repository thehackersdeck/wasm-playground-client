import React from 'react';

// Images
import forkIcon from '../assets/images/fork.svg';
import downloadIcon from '../assets/images/download.svg';
import buildIcon from '../assets/images/build.svg';
import runIcon from '../assets/images/run.svg';
import shareIcon from '../assets/images/share.svg';
import profileIcon from '../assets/images/profile.svg';

/**
 * Presentational component for the action bar
 * 
 * @param {undefined}
 * @return {React.Component}
 */
const ActionBar = () => (
    <div className="wa-playground-action-bar">
        <div className="action-bar-icon-list action-bar-icon-list--active">
            <img src={forkIcon} className="list-icon" alt="Fork" />
            <span className="action-label">fork</span>
        </div>
        <div className="action-bar-icon-list">
            <img src={downloadIcon} className="list-icon" alt="Download" />
            <span className="action-label">download</span>
        </div>
        <div className="action-bar-icon-list">
            <img src={buildIcon} className="list-icon" alt="Build" />
            <span className="action-label">build</span>
        </div>
        <div className="action-bar-icon-list">
            <img src={runIcon} className="list-icon" alt="Run" />
            <span className="action-label">run</span>
        </div>
        <div className="action-bar-icon-list--right">
            <div className="action-bar-icon-list">
                <img src={shareIcon} className="list-icon" alt="Build" />
                <span className="action-label">share</span>
            </div>
            <div className="action-bar-icon-list icon-profile">
                <img src={profileIcon} className="list-icon" alt="Run" />
                <span className="action-label">profile</span>
            </div>
        </div>
    </div>
);

export default ActionBar;