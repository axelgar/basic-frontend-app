
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'

class EliminarVivienda extends Component {
  state = {
    redirect: false,
    viviendas: []
  }


  handleDeleteClick = (id) => {
    viviendaBackendService.deleteOneVivienda(id)
    .then(()=>{
     
      const filterViviendas = this.state.viviendas.filter((singleVivienda) => {
        return singleVivienda._id !== id
      })
      this.setState({
        viviendas: filterViviendas,
        redirect: true,
      })
      })
   }
   
   componentDidMount(){
     const viviendas = viviendaBackendService.getAllViviendas()
      .then((response)=>{
        this.setState({
          viviendas: response.data.listOfViv
        })
      })
   }
   


  render() {
    const {viviendas, redirect} = this.state
    console.log(viviendas)
    return (
     
        <div>
          <h1>Eliminar vivienda</h1>
          {viviendas.length > 0 ? viviendas.map((vivienda) => {
            return (
              <article key = {vivienda._id}>
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
                 }}>Eliminar</button>
              </article>
            )
          }) : <p>Loading ...</p>
        }
        {redirect ? <Redirect to = '/privatelist'/> : null}
        
      </div>
    
    )
  }
}


export default withAuth(EliminarVivienda);
