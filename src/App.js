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
import { useState, useEffect } from "react";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const nextScroll = () => {
    let scrollnum = currentPage + 1;
    setCurrentPage(scrollnum);
    console.log(currentPage);
    fetch(`https://picsum.photos/v2/list?page=${scrollnum}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setImages([...images, ...data]);
      });
  };

  console.log(images);
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
      <div className="image-container">
        {images.length > 0 &&
          images.map((image) => <Image key={image.id} {...image} />)}
      </div>
      <div>
        <InfiniteScroll
          dataLength={images.length}
          next={nextScroll}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        />
      </div>
    </div>
  );
}

export default App;
