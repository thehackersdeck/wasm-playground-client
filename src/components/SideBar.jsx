import React from "react";
import Directory from "./Directory";
import File from "./File";

/**
 * Presentational component for the side bar
 *
 * @param {undefined}
 * @return {React.Component}
 */
const SideBar = () => (
  <div className="wa-playground-side-bar">
    <Directory name="client" open={false} />
    <Directory name="src" open={true} fileOpen={true}>
      <File fileType="c" filename="hello" active={true} />
      <File fileType="html" filename="index" />
      <File fileType="js" filename="main" />
    </Directory>
    <Directory name="dist" open={true}>
      <File fileType="wasm" filename="hello" />
      <File fileType="wat" filename="hello" />
    </Directory>
  </div>
);

export default SideBar;
