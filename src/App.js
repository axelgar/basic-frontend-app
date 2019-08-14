import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/NavBar.js';
import Footer from './components/Footer'
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext.js'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'
import NotFound from './pages/NotFound'
import List from './pages/List'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
        <div className="container">
        
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <Route path = "/list" exact component={List} />
            <Route path = "/detail" exact component={Detail} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
        </AuthProvider>
       
       
      </Router>
    )
  }
}

export default App;
