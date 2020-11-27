import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotifyerState from "./components/context/NotifyerState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <NotifyerState>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
          </Switch>
          </div>
        </div>
      </Router>
    </NotifyerState>
  );
}

export default App;
