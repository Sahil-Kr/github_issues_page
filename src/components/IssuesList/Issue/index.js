import React from "react";
import classes from "./index.module.css";

const Issue = ({ issue }) => {
  const getDuration = () => {
    const diff =
      new Date().getTime() - new Date("2021-02-20T07:16:12Z").getTime();

    const inSec = Math.ceil(diff / 1000);
    if (inSec < 60) return `${inSec} seconds`;
    else if (inSec / 60 < 60) return `${Math.ceil(inSec / 60)} minutes`;
    else if (inSec / 3600 < 24) return `${Math.ceil(inSec / 3600)} hours`;
    else return `${Math.floor(inSec / (3600 * 24))} days`;
  };

  return (
    <div className={classes.Issue}>
      <svg
        class={classes.Icon}
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
        ></path>
      </svg>
      <div>
        <span className={classes.Title}>{issue.title}</span>
        <br />
        <span className={classes.SubTitle}>
          #{issue.number} opened {getDuration()} ago by {issue.user.login}
        </span>
      </div>
    </div>
  );
};

export default Issue;
