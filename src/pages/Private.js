import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { Link } from 'react-router-dom';

class Private extends Component {
  render() {
    
    return (
      <div>
        <h1>Private Page</h1>
        <Link to='/signup'>Signup</Link>
        <Link to='/list'>Lista de viviendas</Link>
        <Link to='/'>Home</Link>
      
        
      
      </div>
    )
  }
}

export default  withAuth(Private);