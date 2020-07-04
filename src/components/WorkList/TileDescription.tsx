import React, { useState } from "react";
import "./_TileDescription.scss";
import ShowMoreBtn from "../Layout/Buttons/ShowMoreBtn";

const WorkTile = (props: any) => {
  const { description } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={`tile-description ${showMore ? "show-more" : ""}`}>
      <p>{description}</p>
      <ShowMoreBtn showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
};

export default WorkTile;
