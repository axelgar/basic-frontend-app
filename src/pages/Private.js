import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { Link } from 'react-router-dom';
// import NavBar from '../components/NavBar.js';

class Private extends Component {
  render() {
    
    return (
      <div>
       
        <h1>Private Page</h1>
        <Link to='/signup'>Signup</Link>
        <Link to='/privatelist'>Lista de viviendas</Link>
        <Link to='/crearvivienda'>Crear nueva vivienda</Link>
        <Link to='/eliminarvivienda'>Eliminar vivienda</Link>
      
      
        
      
      </div>
    )
  }
}

export default  withAuth(Private);