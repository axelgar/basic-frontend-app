import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import PrivateCard from '../components/PrivateCard'

class PrivateList extends Component {

  state = {
    viviendas: []
  }

  componentDidMount(){
 
    viviendaBackendService.getAllViviendas()
    .then(response => {
      
      this.setState({
        viviendas: response.data.listOfViv
  
      })
    })
  }

    render() {
      const {viviendas,} = this.state
      console.log(viviendas )
      return (
        <div>
          <h1>Lista de viviendas</h1>
          <Link to='/searchreferencia'><button>Buscar por referencia</button></Link>
            {viviendas.length > 0 ? viviendas.map((vivienda)=>{
              return ( <Link key={vivienda._id} to={`/detail/${vivienda._id}`}>

              <PrivateCard   
                title={vivienda.title} 
                clase={vivienda.clase}
                image={vivienda.image} 
                type={vivienda.type} 
                city={vivienda.ciudad}
                direccion={vivienda.direccion}
                price={vivienda.price} 
                metros={vivienda.metros}
                numHab={vivienda.numHab} 
                numAseos={vivienda.numAseos} 
                referencia={vivienda.referencia} 
                numGarajes={vivienda.numGarajes}
                piscina={vivienda.piscina}
                jardin={vivienda.jardin}
                descripcion={vivienda.description}
                nombrePropietario={vivienda.nombrePropietario}
                telefonoPropietario={vivienda.telefonoPropietario}
                mailPropietario={vivienda.mailPropietario}
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
 
  export default withAuth(PrivateList);
