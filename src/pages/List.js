import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom';

class List extends Component {
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


// handleDeleteClick = (id) => {
//   appStoreService.deleteOneApp(id)
//   .then(()=>{
   
//     const filteredApps = this.state.apps.filter((singleApp) => {
//       return singleApp._id !== id
//     })
//     this.setState({
//       apps: filteredApps
//     })
//     })
//  }

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

export default List 


