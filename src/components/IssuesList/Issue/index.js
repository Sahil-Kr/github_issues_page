import React from "react";
import Label from "../../Label";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

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
      <div className={classes.Icon}>
        <svg>
          <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
        </svg>
      </div>
      <div>
        <Link className={classes.Link} to={`/${issue.number}`}>
          <span className={classes.Title}>{issue.title}</span>
        </Link>
        {issue.labels.map((label) => (
          <Label key={label.id} label={label} />
        ))}
        <br />
        <span className={classes.SubTitle}>
          #{issue.number} opened {getDuration()} ago by {issue.user.login}
        </span>
      </div>
    </div>
  );
};

export default Issue;
