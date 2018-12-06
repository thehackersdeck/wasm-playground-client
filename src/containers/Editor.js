import React, { Component } from 'react';
import CodeEditor from '../components/CodeEditor';
import Panel from './Panel';

/**
 * Editor Container Component
 * 
 * @param {undefined}
 * @return {React.Component}
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="wa-playground-editor">
                <CodeEditor />
                <Panel />
            </div>
        );
    }
}

export default Editor;