import classes from "./index.module.css";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className={classes.Modal}></div>
      <div className={classes.Loader}></div>
    </>
  );
};

export default Loading;
