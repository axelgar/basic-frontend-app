import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { Link } from 'react-router-dom';
// import NavBar from '../components/NavBar.js';

class Private extends Component {
  render() {
    
    return (
      <div>
       
        <h1>Private Page</h1>
        <Link to='/signup'><button>Crear nuevo usuario</button></Link>
        <Link to='/privatelist'><button>Lista de viviendas</button></Link>
        <Link to='/crearvivienda'><button>Crear nueva vivienda</button></Link>
        <Link to='/searchreferencia'><button>Buscar por referencia</button></Link>
        <Link to='/modificarvivienda'><button>Modificar vivienda</button></Link>
        <Link to='/eliminarvivienda'><button>Eliminar vivienda</button></Link>
      
      
        
      
      </div>
    )
  }
}

export default  withAuth(Private);