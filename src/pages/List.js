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
                metros={vivienda.metros}
                ciudad={vivienda.ciudad}
                direccion={vivienda.direccion}
                numHab={vivienda.numHab} 
                numAseos={vivienda.numAseos} 
                numGarajes={vivienda.numGarajes}
                piscina={vivienda.piscina}
                jardin={vivienda.jardin}
                referencia={vivienda.referencia} 
                descripcion={vivienda.description}

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


