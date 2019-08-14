import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hola</h1>
        <Link to='/list'>Lista de viviendas</Link>
      </div>
    )
  }
}
