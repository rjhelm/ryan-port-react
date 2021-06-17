import React from "react";

import { Paper, Container, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

function CreateSkills({ skills, size }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "6vw",
      marginBottom: "3vw",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      "& > svg": {
        margin: theme.spacing(2),
      },
    },
    paper: {
      display: "flex",
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: "50%",
      margin: "-1vw",
      backgroundColor: "#fff",
      transition: theme.transitions.create(["transform", "scale"], {
        duration: (theme.transitions.duration = "1s"),
        easing: "cubic-bezier(.39,.84,.65,.21)",
      }),
      "&:hover": {
        transform: "scale(1.175)",
      },
    },
  }));

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {/* ALSO CAN APPLY CLASSES LIKE THIS => classes={{ root: classes.paper }} */}
      {skills.map((item, index) => {
        const color = item.color;

        if (item.name === "kubernetes") {
          return (
            <Paper key={index - 1} className={classes.paper} elevation={3}>
              
            </Paper>
          );
        }

        return (
          <Paper key={index - 1} className={classes.paper} elevation={3}>
            <Icon
              className={`fab fa-${item.name}`}
              style={{
                color: colors[color][500],
                fontSize: "5vw",
                width: "fit-Content",
              }}
            />
          </Paper>
        );
      })}
    </Container>
  );
}

export default CreateSkills;