import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/NavBar.js';
import Footer from './components/Footer'
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext.js'
import PrivateRoute from './components/PrivateRoute'
import PrivateList from './components/PrivateList'
import AnonRoute from './components/AnonRoute'
import SearchReferencia from './components/SearchReferencia'
import CrearViviendas from './components/CrearViviendas';
import EliminarVivienda from './components/EliminarVivienda'
import ModificarVivienda from './components/ModificarVivienda'
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
            <Route  path="/signup" component={Signup} />
            <PrivateRoute  path ="/privatelist" component={PrivateList} />
            <AnonRoute  path="/login" component={Login} />
            <PrivateRoute  path="/private" component={Private} />
            <PrivateRoute  path="/crearvivienda" component={CrearViviendas} />
            <PrivateRoute  path="/eliminarvivienda" component={EliminarVivienda} />
            <PrivateRoute  path="/modificarvivienda" component={ModificarVivienda} />
            <Route path = "/list"  component={List} />
            <Route path = "/detail/:id"  component={Detail} />
            <Route path="/searchreferencia" component={SearchReferencia} />
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
