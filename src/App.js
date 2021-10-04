import "./App.css";
import Sidebar from "./Components/Sidebar";
import Sidebarnew from "./Sidebarnew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roadmap from "./Roadmap";
import Backlog from "./Backlog";
import Board from "./Board";
import Code from "./Code";
import ProjectPages from "./ProjectPages";
import AddShortcuts from "./AddShortcuts";
import ProjectSettings from "./ProjectSettings";

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Router>
        <Sidebarnew />
        <Switch>
          <Route
            exact
            path="/Roadmap"
            render={(props) => <Roadmap {...props} />}
          />
          <Route
            exact
            path="/Backlog"
            render={(props) => <Backlog {...props} />}
          />
          <Route exact path="/Board" render={(props) => <Board {...props} />} />
          <Route exact path="/Code" render={(props) => <Code {...props} />} />
          <Route
            exact
            path="/ProjectPages"
            render={(props) => <ProjectPages {...props} />}
          />
          <Route
            exact
            path="/AddShortcuts"
            render={(props) => <AddShortcuts {...props} />}
          />
          <Route
            exact
            path="/ProjectSettings"
            render={(props) => <ProjectSettings {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
