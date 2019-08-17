
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'


class SearchVivienda extends Component {
  state = {
      title: '',
      type: undefined,
      image: '',
      price: 0,
      numHab: 0,
      NumAseos: 0,
      referencia: 0,
      description: '',
      viviendas: []
    }

    handleFormSubmit= (event) => {
    
      const {title, type, image, price, numHab, numAseos, referencia, description} = this.state
      event.preventDefault();
      viviendaBackendService.searchVivienda({
      title,
      image,
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
  }



  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

 

 render() {
   const{referencia,viviendas} = this.state
   console.log(this.state.viviendas.data)
   
   return (
     <div>
       <h1>Buscar por referencia:</h1>
       {viviendas.data ? viviendas.data.map((vivienda)=>{
            return (
          <article key={vivienda._id}>

              <h3>{vivienda.title}</h3>
              <img src={vivienda.image} alt={vivienda.title}></img>
              <p>{vivienda.type}</p>
              <p>{vivienda.price}</p>
              <p>{vivienda.image}</p>
              <p>{vivienda.numHab}</p>
              <p>{vivienda.numAseos}</p>
              <p>{vivienda.referencia}</p>
              <p>{vivienda.description}</p>
             
         </article>
            )
          }) : null
          }
        <form onSubmit={this.handleFormSubmit}>
         <label htmlFor='referencia' >Referencia:</label>
          <input id='referencia' type='number' name='referencia' value={referencia} onChange={this.handleChange}/>
         <button type ="submit">Search</button>
         
      </form>
     </div>
   )
 }
}



export default withAuth(SearchVivienda);