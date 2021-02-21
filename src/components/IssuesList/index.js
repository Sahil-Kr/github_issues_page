import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import classes from "./index.module.css";
import Loading from "../Loading";

const IssuesList = () => {
  const [issuesData, setIssuesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(2);
  const [morePages, setMorePages] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data....");
    const res = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const issues = await res.json();
    console.log(issues);
    setIssuesData(issues);
    setLoading(false);
  };

  const fetchPagination = async () => {
    if (!morePages) return;
    setLoading(true);

    console.log(`fetching page ${pageNo} data....`);
    const res = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues?page=${pageNo}&per_page=30`
    );

    const issues = await res.json();

    console.log(issues);

    if (!issues || issues.length === 0) {
      setMorePages(false);
      setLoading(false);
      return;
    }

    setPageNo(pageNo + 1);
    setIssuesData([...issuesData, ...issues]);
    setLoading(false);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className={classes.IssuesList}>
        {issuesData.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </div>
      <span onClick={fetchPagination} className={classes.LoadMore}>
        {morePages && !loading
          ? "Load More"
          : !loading
          ? "--- That's all ---"
          : ""}
      </span>
    </>
  );
};

export default IssuesList;
