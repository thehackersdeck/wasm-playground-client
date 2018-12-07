import React from "react";

/**
 * Presentational component for the Panel Tab
 *
 * @param {undefined}
 * @return {React.Component}
 */
const PanelTab = ({ label, onClick, activeTab }) => {
  const className =
    activeTab === label ? "tab-list-item active" : "tab-list-item";
  return (
    <div
      className={className}
      onClick={e => {
        onClick(label);
      }}
    >
      {label}
    </div>
  );
};

export default PanelTab;
