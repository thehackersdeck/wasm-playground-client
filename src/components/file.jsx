import React from "react";

import c from "../assets/images/c.svg";
import html5 from "../assets/images/html5.svg";
import js from "../assets/images/js.svg";
import wasm from "../assets/images/wasm.svg";
import wat from "../assets/images/wat.svg";

/**
 * Presentational component for the file
 *
 * @param {undefined}
 * @return {React.Component}
 */
const File = props => {
  let file;
  const className = props.active ? "file active" : "file";
  let filename = `${props.filename}.${props.fileType}`;
  if (props.fileType === "c") {
    file = (
      <div className={className}>
        <img className="directory-icon" src={c} alt="c" />
        <span className="filename">{filename}</span>
      </div>
    );
  }
  if (props.fileType === "wat") {
    file = (
      <div className={className}>
        <img className="directory-icon" src={wat} alt="wat" />
        <span className="filename">{filename}</span>
      </div>
    );
  }
  if (props.fileType === "html") {
    file = (
      <div className={className}>
        <img className="file-icon" src={html5} alt="html" />
        <span className="filename">{filename}</span>
      </div>
    );
  }
  if (props.fileType === "wasm") {
    file = (
      <div className={className}>
        <img className="directory-icon" src={wasm} alt="wa" />
        <span className="filename">{filename}</span>
      </div>
    );
  }
  if (props.fileType === "js") {
    file = (
      <div className={className}>
        <img className="directory-icon" src={js} alt="js" />
        <span className="filename">{filename}</span>
      </div>
    );
  }

  return <div className="sidebar-file">{file}</div>;
};

export default File;
