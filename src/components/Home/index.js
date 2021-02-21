import React from "react";
import IssuesList from "../IssuesList";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "2rem", color: "white" }}>
        facebook/create-react-app - issues
      </div>
      <IssuesList />
    </>
  );
};

export default Home;
