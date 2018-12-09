import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.containerElement = null;
        this.theme = {
            base: 'vs-dark',
            inherit: true,
            rules: [       
                { background: '22283A' },
            ],
            colors: {
                'editor.background': '#22283A',
                'editor.lineHighlightBackground': '#181E2E'
            },
        }
    }

    componentDidMount() {
        const { value, language } = this.props;

        this.editor = monaco.editor.create(this.containerElement, {
            value, language, fontWeight: '600'
        });

        monaco.editor.defineTheme('waPlayground', this.theme);
        monaco.editor.setTheme('waPlayground');
    }

    createRef = (element) => {
        this.containerElement = element;
    }

    render() { 
        return (
            <div ref={this.createRef} className="wa-playground-code-editor"></div>
        );
    }
}
 
export default CodeEditor;