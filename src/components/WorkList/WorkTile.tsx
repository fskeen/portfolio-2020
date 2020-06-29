import React, { useState } from "react";
import "./_WorkTile.scss";
import TileTitle from "./TileTitle";
import TileDescription from "./TileDescription";

const WorkTile = (props: any) => {
  const { project } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="work-tile">
      <img src={project.image} alt="alt" />
      <div>
        <TileTitle title={project.title} skillList={project.skills} />
        <TileDescription description={project.description} />
      </div>
    </div>
  );
};

export default WorkTile;
