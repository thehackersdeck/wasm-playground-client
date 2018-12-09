import React, { Component } from 'react';
import Editor from '../containers/Editor';
import Panel from '../containers/Panel';

/**
 * Container component for the main content area
 *
 * @param {undefined}
 * @return {React.Component}
 */
class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPanelMinimized: true,
        }
    }

    handleTogglePanel = () => {
        const { isPanelMinimized } = this.state;

        this.setState({
            isPanelMinimized: ! isPanelMinimized,
        });
    }

    render() {
        const { isPanelMinimized } = this.state;
        return (
            <main className="wa-playground-main">
                <Editor />
                <Panel
                    onClick={this.handleTogglePanel}
                    isMinimized={isPanelMinimized}
                    />
            </main>
        );
    }
}
 
export default ContentArea;