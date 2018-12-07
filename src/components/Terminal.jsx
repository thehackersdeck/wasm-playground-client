import React from "react";

const Terminal = () => {
  return (
    <div className="panel-body wa-panel-terminal">
      <div className="divider">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div className="terminal-input">/usr/deskop/my-project >> ls</div>
      <div className="terminal-response">
        <span>src</span>
        <span>dist</span>
        <span>client</span>
      </div>
      <div className="divider">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div className="terminal-input">/usr/deskop/my-project >> cd client</div>
      <div className="divider">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div className="terminal-input">/usr/deskop/my-project/client</div>
    </div>
  );
};

export default Terminal;
