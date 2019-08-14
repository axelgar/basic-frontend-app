import React, { Component } from 'react'
import withAuth from '../components/withAuth.js'

import { Link } from 'react-router-dom';

class Private extends Component {
  render() {
    
    return (
      <div>
        <Link to='/signup'>Signup</Link>
      
        
      
      </div>
    )
  }
}

export default  withAuth(Private);