import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './pages/style.css';
import Home from './pages/Home';
import Joke from './pages/Joke';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
          <Route exact path="/joke" component={Joke} />
          <Route exact path='/' component={Home} />
      </HashRouter>
    );
  }
}

export default App;
