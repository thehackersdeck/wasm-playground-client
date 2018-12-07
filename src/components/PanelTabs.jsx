import React, { Component } from "react";
import PanelTab from "./PanelTab";

/**
 * Presentational component for the Panel Tabs
 *
 * @param {undefined}
 * @return {React.Component}
 */
class PanelTabs extends Component {
  state = {
    activeTab: this.props.children[3].props.label
  };

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };
  render() {
    const { children } = this.props;
    const { activeTab } = this.state;
    return (
      <React.Fragment>
        <div className="panel-tab-list">
          {children.map(child => {
            const { label } = child.props;
            return (
              <PanelTab
                onClick={this.onClickTabItem}
                activeTab={activeTab}
                label={label}
                key={label}
              />
            );
          })}
        </div>
        <React.Fragment>
          {children.map(child => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default PanelTabs;
