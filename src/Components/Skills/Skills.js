import React from "react";
import Zoom from "react-reveal/Zoom";
import CreateSkills from "./CreateSkills";
import styles from "./skills.module.css";
import appStyles from "../../app.module.css";

const Skills = () => {
  const devSkills = [
    { name: "js-square", color: `purple` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3-alt", color: "green" },
    { name: "bootstrap", color: "orange" },
    { name: "github-square", color: "grey" },
    { name: "markdown", color: "black" },
    { name: "npm", color: "yellow" },
    { name: "node", color: "red" },
  ];

  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>More About Me</h2>
      <Zoom duration={1500} top>
        <CreateSkills skills={devSkills} size="9vw" />
      </Zoom>
      <div>
        <h2>Resume</h2>
      </div>
    </div>
  );
};

export default Skills;