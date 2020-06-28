import React from "react";
import "./_TechList.scss";

const TechList = (props: any) => {
  const { title, skills } = props;
  return (
    <ul className="tech-list">
      {skills.map((skill: any, i: number) => (
        <li key={`${title}-skill-${i}`} className="tech-list-item">
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default TechList;
