import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/NavBar.js';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext.js'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'
import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
