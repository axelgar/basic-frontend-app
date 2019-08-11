import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navabr.js';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/private" component={Private} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
