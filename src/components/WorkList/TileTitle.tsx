import React from "react";
import "./_TileTitle.scss";
import TechList from "./TechList";

const TileTitle = (props: any) => {
  const { title, skillList } = props;
  return (
    <div className="tile-title">
      <h3>{title}</h3>
      <TechList skills={skillList} title={title} />
    </div>
  );
};

export default TileTitle;
