import React, { Component } from 'react';
import CodeEditor from '../components/CodeEditor';
import c from "../assets/images/c.svg";
import closeIcon from '../assets/images/close.svg';

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
            editors: [
                {
                    tab: {
                        isActive: false
                    },
                    codeEditor: {

                    }
                },
                {
                    tab: {
                        isActive: true
                    },
                    codeEditor: {

                    }
                },
                {
                    tab: {
                        isActive: false
                    },
                    codeEditor: {

                    }
                },
            ],
            activeEditor: 0
        };
    }

    render() {
        const { editors } = this.state;
        return (
            <div className="wa-playground-editor">
                <div className="wa-playground-editor-tabs">
                    { editors.map((editor, index) => {
                        return (
                            <div key={index} className={ `wa-editor-tab ${editor.tab.isActive ? 'wa-editor-tab--active' : ''}` }>
                                <img className="file-type-icon" src={c} alt="C" />
                                <span className="wa-editor-tab__label">fibonacci.c</span>
                                <div className="wa-editor-tab__close">
                                    <img src={closeIcon} alt="Close" title="Close" />
                                </div>
                            </div>
                        )
                    }) }
                </div>
                <CodeEditor value="" language="typescript" theme="vs-dark" />
            </div>
        );
    }
}

export default Editor;