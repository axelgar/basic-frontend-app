
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import ViviendaForm from "./ViviendaForm"
import { Link } from 'react-router-dom';


class ModificarVivienda extends Component {
  state = {
    viviendas:[]
  }

  handelSubmit= (event) => {
    const {title, type, image, price, numHab, numAseos, referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario} = this.state
    event.preventDefault();
    viviendaBackendService.updateOneVivienda({
    title,
    image,
    type,
    ciudad,
    direccion,
    metros,
    price,
    piscina,
    jardin,
    numHab,
    numAseos,
    numGarajes,
    piscina,
    referencia,
    description,
    nombrePropietario,
    telefonoPropietario,
    mailPropietario






    })
    .then(()=>{})
   }
   
  handleUpdate = (event)=> {
    const {name,value} = event.target;

    this.setState({
      [name]: value,
    })
    console.log(this.state);
    
  }


  componentDidMount(){
    this.getFreshData()
  }

  getFreshData = () => {
    viviendaBackendService.getAllViviendas()
      .then(response => {
        console.log("AQUI", response.data.listOfViv)
        this.setState({
        viviendas: response.data.listOfViv
      })
    })
  }

  
    render() {
      const {title, image, type, price, numHab, numAseos, redirect, referencia, description,viviendas} = this.state
      
      return (
        <div>
          <h1>Modificar</h1>
          <p>Numero de viviendas en cartera: {viviendas.length}</p>
          {/* <Link to='/searchreferencia'><button>Buscar por referencia</button></Link> */}
          {viviendas.length > 0 ? viviendas.map((vivienda)=>{
            return (
              <ViviendaForm
               key={vivienda._id}
               vivienda={vivienda}
               refreshData={this.getFreshData}
              />
          )
        }) : <p>loading....</p>
      }
          {redirect ? <Redirect to = '/privatelist'/> : null}
        </div>
      )
    }
  }

  export default withAuth(ModificarVivienda);









