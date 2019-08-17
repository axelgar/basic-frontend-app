
import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import ViviendaForm from "./ViviendaForm"


class ModificarVivienda extends Component {
  state = {
    viviendas:[]
  }

  handelSubmit= (event) => {
    const {title, type, image, price, numHab, numAseos, referencia, description} = this.state
    event.preventDefault();
    viviendaBackendService.updateOneVivienda({
    title,
    image,
    type,
    price ,
    numHab,
    numAseos,
    referencia,
    description,

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









