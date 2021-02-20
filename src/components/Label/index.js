import classes from "./index.module.css";
import React from "react";

const Label = ({ label }) => {
  const style = {
    border: `1px solid #${label.color}`,
    color: `#${label.color}`,
    fontWeight: 500,
  };

  return (
    <span className={classes.Label} style={style}>
      {label.name}
    </span>
  );
};

export default Label;
