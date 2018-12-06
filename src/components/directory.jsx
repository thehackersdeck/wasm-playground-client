import React from "react";

//images
import folder_open from "../assets/images/folder-open.svg";
import folder_closed from "../assets/images/folder-closed.svg";
import folder_file_open from "../assets/images/folder-file-open.svg";

/**
 * Presentational component for the Directory
 *
 * @param {undefined}
 * @return {React.Component}
 */
const Directory = props => {
  // file in folder is open
  const fileInFolderIsOpen = props.fileOpen ? folder_file_open : folder_open;
  //Folder is opened or closed
  const folderIcon = props.open ? fileInFolderIsOpen : folder_closed;

  const files = props.open ? (
    <div className="files">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  ) : null;

  return (
    <div className="sidebar-directory">
      <div className="folder">
        <img className="folder-icon" src={folderIcon} alt="" />
        <span className="folder-name">{props.name}</span>
      </div>
      {files}
    </div>
  );
};

export default Directory;
