import React from "react";
import { Section } from "../Layout/Section";
import { projects } from "../../data/projects";
import WorkTile from "./WorkTile";
import "./_WorkList.scss";

const WorkList = (props: any) => {
  return <section className="worklist">{createWorkTiles(projects)}</section>;
};

const createWorkTiles = (projectList: any) => {
  return (
    <section>
      <h2>Work</h2>
      {projectList.map((project: any, i: number) => (
        <WorkTile project={project} key={`work-tile-${i}`} />
      ))}
    </section>
  );
};

export default WorkList;
