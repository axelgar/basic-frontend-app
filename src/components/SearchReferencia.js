
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom'
import PrivateCard from '../components/PrivateCard'




class SearchVivienda extends Component {
  state = {
    title: undefined,
    type: undefined,
    image: undefined,
    price: undefined,
    numHab: undefined,
    NumAseos: undefined,
    referencia: undefined,
    clase: undefined,
    description: undefined,
    metros: undefined,
    viviendas: []
  };

  handleFormSubmit= (event) => {
    const {title, type, image, price, clase, numHab, numAseos, referencia, description} = this.state
    event.preventDefault();
    viviendaBackendService.searchVivienda({
      title,
      image,
      clase,
      type,
      price,
      numHab,
      numAseos,
      referencia,
      description,
      })
      .then((viviendas) => {
        this.setState({
          viviendas,
        })
      })
      .catch (error => {console.log(error)
    })
  };

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

 render() {
   const{referencia,clase, price, metros, numHab, numAseos, viviendas} = this.state
   console.log(this.state.viviendas.data)
   
   return (
     <div>
       <h1>Buscar por referencia:</h1>
       {viviendas.data ? viviendas.data.map((vivienda)=>{
            return ( <Link key={vivienda._id} to={`/detail/${vivienda._id}`}>

            <PrivateCard   
              clase={vivienda.clase}
              title={vivienda.title} 
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
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='referencia'>Referencia:</label>
          <input id='referencia' type='number' name='referencia' value={referencia} onChange={this.handleChange}/>

          <label htmlFor='clase'>Clase:</label>
          <input id='clase' type='text' name='clase' value={clase} onChange={this.handleChange}/>

          <label htmlFor='price'>Price:</label>
          <input id='price' type='number' name='price' value={price} onChange={this.handleChange}/>

          <label htmlFor='metros'>Meters:</label>
          <input id='metros' type='number' name='metros' value={metros} onChange={this.handleChange}/>

          <button type ="submit">Search</button>
         
      </form>
     </div>
   )
 }
}



export default withAuth(SearchVivienda);