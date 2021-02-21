import IssuesList from "./components/IssuesList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import IssueDetail from "./components/IssueDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={IssueDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
