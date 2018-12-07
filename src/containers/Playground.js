import React, { Component } from 'react';
import ActionBar from '../components/ActionBar';
import SideBar from '../components/SideBar';
import StatusBar from '../components/StatusBar';
import Editor from './Editor';

/**
 * Playground Container Component
 * 
 * @param {undefined}
 * @return {React.Component}
 */
class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="wa-playground-container">
                <ActionBar />
                <SideBar />
                <Editor />
                <StatusBar>
                    <div class="wa-status-bar-item">
                        <span>Ln 30, Col 44</span>
                    </div>
                    <div class="wa-status-bar-item">
                        <span>C/C++</span>
                    </div>
                    <div class="wa-status-bar-item">
                        <span>Spaces: 4</span>
                    </div>
                </StatusBar>
            </div>
        );
    }
}

export default Playground;