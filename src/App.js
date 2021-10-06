import "./App.css";
import Sidebarnew from "./Components/Sidebarnew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roadmap from "./Components/Routers/Roadmap";
import Backlog from "./Components/Routers/Backlog";
import Board from "./Components/Routers/Board";
import Code from "./Components/Routers/Code";
import ProjectPages from "./Components/Routers/ProjectPages";
import AddShortcuts from "./Components/Routers/AddShortcuts";
import ProjectSettings from "./Components/Routers/ProjectSettings";
import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setInterval(() => {
      fetch(`https://picsum.photos/200/300`).then((res) => {
        setImages(res);
      });
    }, 10000);
  }, []);

  // const nextScroll = () => {
  //   let scrollnum = currentPage + 1;
  //   setCurrentPage(scrollnum);
  //   console.log(currentPage);
  //   fetch(`https://picsum.photos/200/300`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages([...images, ...data]);
  //     });
  // };
  console.log(images);
  return (
    <div>
      <div className="App">
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
            <Route
              exact
              path="/Board"
              render={(props) => <Board {...props} />}
            />
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
        <div className="image-container">
          <img src={images.url} />
        </div>
        {/* <div>
          <InfiniteScroll
            dataLength={images.length}
            next={nextScroll}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          />
        </div> */}
      </div>
    </div>
  );
}

export default App;
