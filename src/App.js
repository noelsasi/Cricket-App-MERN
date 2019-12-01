import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListContainer from "./components/list-container";
import MatchDescription from "./components/item-desc";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" exact component={ListContainer} />
        <Route path="/match/:id" exact component={MatchDescription} />
      </div>
    </Router>
  );
}

export default App;
