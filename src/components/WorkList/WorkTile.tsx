import React, { useState } from "react";
import "./_WorkTile.scss";
import TileTitle from "./TileTitle";
import ShowMoreBtn from "../Layout/Buttons/ShowMoreBtn";

const WorkTile = (props: any) => {
  const { project } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="work-tile">
      <img src={project.image} alt="alt" />
      <div>
        <TileTitle title={project.title} skillList={project.skills} />
        <p>{project.description}</p>
      </div>
      <ShowMoreBtn showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
};

export default WorkTile;
