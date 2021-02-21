import classes from "./index.module.css";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const IssueDetail = ({ match }) => {
  const [issueData, setIssueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data....");
    const res = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${match.params.id}`
    );
    const issue = await res.json();
    console.log(issue);
    setIssueData(issue);
    setLoading(false);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      {issueData ? (
        <div className={classes.Container}>
          {issueData.user ? (
            <div
              className={classes.UserImage}
              style={{
                backgroundImage: `url('${issueData.user?.avatar_url}')`,
              }}
            ></div>
          ) : (
            ""
          )}
          <div className={classes.CommentsCont}>
            {issueData.user ? (
              <p className={classes.User}>{issueData.user.login}</p>
            ) : (
              ""
            )}
            <ReactMarkdown
              plugins={[gfm]}
              children={issueData.body}
              className={classes.Comments}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default IssueDetail;
