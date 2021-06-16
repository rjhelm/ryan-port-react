import React from "react";
import Zoom from "react-reveal/Zoom";
import CreateSkills from "./CreateSkills";
import styles from "./skills.module.css";
import appStyles from "../../app.module.css";

const Skills = () => {
  const devSkills = [
    { name: "js-square", color: `yellow` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3-alt", color: "blue" },
    { name: "", color: "orange" },
    { name: "github-square", color: "grey" },
    { name: "mysql", color: "blue" },
    { name: "nosql", color: "orange" },
    { name: "node-js", color: "orange" },
    { name: "express", color: "brown" },
  ];

  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>Development Skills</h2>
      <Zoom duration={1500} top>
        <CreateSkills skills={devSkills} size="9vw" />
      </Zoom>
    </div>
  );
};

export default Skills;