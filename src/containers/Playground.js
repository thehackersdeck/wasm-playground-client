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
                <StatusBar />
            </div>
        );
    }
}

export default Playground;