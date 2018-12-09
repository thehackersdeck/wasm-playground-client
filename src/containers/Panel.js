import React, { Component } from "react";
import PanelTabs from "../components/PanelTabs";
import Output from "../components/Output";
import Terminal from "../components/Terminal";
import Problems from "../components/Problems";
import Debug from "../components/Debug";

// Icons
import arrowUpIcon from '../assets/images/arrow-up.svg';
import arrowDownIcon from '../assets/images/arrow-down.svg';

/**
 * Panel Container Component
 *
 * @param {undefined}
 * @return {React.Component}
 */
class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  renderToggleButton = (isMinimized) => {
    if (isMinimized) {
      return <img src={arrowUpIcon} alt="Maximize Panel" />;
    }

    return <img src={arrowDownIcon} alt="Minimize Panel" />;
  }

  render() {
    const { onClick, isMinimized } = this.props;

    return (
      <div className={`wa-playground-panel ${isMinimized ? 'wa-playground-panel--minimized' : ''}`}>
        <PanelTabs>
          <div label="PROBLEMS">
            <Problems />
          </div>
          <div label="OUTPUT">
            <Output />
          </div>
          <div label="DEBUG">
            <Debug />
          </div>
          <div label="TERMINAL">
            <Terminal />
          </div>
        </PanelTabs>
        <div className="wa-toggle-panel" onClick={onClick}>
            {this.renderToggleButton(isMinimized)}
        </div>
      </div>
    );
  }
}

export default Panel;
