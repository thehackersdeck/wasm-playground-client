import React, { Component } from 'react';
import LineNumberStatus from './LineNumberStatus';
import TextTypeStatus from './TextTypeStatus';
import IndentationStatus from './IndentationStatus';

/**
 * Stateful component for the status bar
 * 
 * @param {undefined}
 * @return {React.Component}
 */
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() { 
        return (
            <div className="wa-playground-status-bar">
                <LineNumberStatus />
                <TextTypeStatus />
                <IndentationStatus />
            </div>
        );
    }
}
 
export default StatusBar;