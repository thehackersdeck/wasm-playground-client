import React, { Component } from "react";
import PanelTabs from "../components/PanelTabs";
import Output from "../components/Output";
import Terminal from "../components/Terminal";
import Problems from "../components/Problems";
import Debug from "../components/Debug";

/**
 * Panel Container Component
 *
 * @param {undefined}
 * @return {React.Component}
 */
class Panel extends Component {
  render() {
    return (
      <div className="wa-playground-panel">
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
      </div>
    );
  }
}

export default Panel;
