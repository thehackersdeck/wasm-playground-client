import React from 'react';
import Action from './Action';

// Images
import forkIcon from '../assets/images/fork.svg';
import downloadIcon from '../assets/images/download.svg';
import buildIcon from '../assets/images/build.svg';
import runIcon from '../assets/images/run.svg';
import shareIcon from '../assets/images/share.svg';
import profileIcon from '../assets/images/profile.svg';
import buildRunIcon from '../assets/images/build-and-run.svg';

/**
 * Presentational component for the action bar
 * 
 * @param {undefined}
 * @return {React.Component}
 */
const ActionBar = () => (
    <div className="wa-playground-action-bar">
        <Action icon={forkIcon} alt="Fork" title="fork" customClasses="action-bar-icon-list--active" /> 
        <Action icon={downloadIcon} alt="Download" title="download" /> 
        <Action icon={buildIcon} alt="Build" title="build" /> 
        <Action icon={runIcon} alt="Run" title="run" /> 
        <Action icon={buildRunIcon} alt="Build and Run" title="build &amp; run" /> 
        <div className="action-bar-icon-list--right">
            <Action icon={shareIcon} alt="Share" title="share" /> 
            <Action icon={profileIcon} alt="Profile" title="profile" customClasses="icon-profile" /> 
        </div>
    </div>
);

export default ActionBar;