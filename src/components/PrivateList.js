import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'

class PrivateList extends Component {

  state = {
    viviendas: []
  }

  componentDidMount(){
    console.log(viviendaBackendService)
    viviendaBackendService.getAllViviendas()
    .then(response => {
      console.log(response.data.listOfViv)
      this.setState({
        viviendas: response.data.listOfViv
  
      })
    })
  }

  
    render() {
      const {viviendas} = this.state
      console.log(viviendas)
      return (
        <div>
          <h1>Lista de viviendas</h1>
            {viviendas.length > 0 ? viviendas.map((vivienda)=>{
              return (
            <article key={vivienda._id}>
                <h3>{vivienda.title}</h3>
                <img src={vivienda.image} alt={vivienda.title}></img>
                <p>{vivienda.type}</p>
                <p>{vivienda.price}</p>
                <p>{vivienda.city}</p>
                <p>{vivienda.numHab}</p>
                <p>{vivienda.numAseos}</p>
                <p>{vivienda.referencia}</p>
                <p>{vivienda.description}</p>
                <button onClick = {() => {
                this.handleDeleteClick(vivienda._id)
                 }}>X</button>
           </article>
              )
            }) : <p>loading....</p>
            }
          
        </div>
      )
    }
  }
 
  export default withAuth(PrivateList);
