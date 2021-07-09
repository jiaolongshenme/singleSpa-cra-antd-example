import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
// import Topics from './page/topics';
// import Detail from "./page/detail";
import './App.css'
function Loading() {
  return <div>loading...</div>;
}

const Topics = Loadable({
  loader: () => import("./page/topics"),
  loading: Loading,
});

const Detail = Loadable({
  loader: () => import("./page/detail"),
  loading: Loading,
});

function App() {
  return (
    <React.Suspense>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about/about1">About</Link>
            </li>
            <li>
              <Link to="/about/topics/">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about/about1" >
              <Detail/>
            </Route>
            <Route path="/about/topics" >
              <Topics/>
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
