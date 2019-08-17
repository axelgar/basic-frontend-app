import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom';
import Card from '../components/Card'

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



  render() {
    const {viviendas} = this.state
    console.log(viviendas)
    return (
      <div>
        <h1>Lista de viviendas</h1>
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return ( <Link key={vivienda._id} to={`/detail/${vivienda._id}`}>

              <Card 
                
                title={vivienda.title} 
                image={vivienda.image} 
                type={vivienda.type} 
                price={vivienda.price} 
                numHab={vivienda.numHab} 
                numAseos={vivienda.numAseos} 
                referencia={vivienda.referencia} 
                descripcion={vivienda.descripcion}
                onclick={this.handleClick}
                />
            </Link>
            )
          }) : <p>loading....</p>
          }
        
      </div>
    )
  }
}

export default List 


