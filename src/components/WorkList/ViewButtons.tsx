import React from "react";
import "./_ViewButtons.scss";

const _ViewButtons = (props: any) => {
  // if (!props?.intro) return null;
  return (
    <div className="view-button-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.githubLink || ""}
        className="view-button"
      >
        View on GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.deployedLink || ""}
        className="view-button"
      >
        View site
      </a>
    </div>
  );
};

export default _ViewButtons;
