import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'


class CrearVivienda extends Component {
  state = {
    title: '',
    image: '',
    type: 'piso',
    price: 0,
    numHab: 0,
    NumAseos: 0,
    referencia: 0,
    description: '',
    redirect: false,
  }

  handelSubmit= (event) => {
    const {title, type, image, price, numHab, numAseos, referencia, description} = this.state
    event.preventDefault();
    viviendaBackendService.addOneVivienda({
    title,
    image,
    type,
    price,
    numHab,
    numAseos,
    referencia,
    description,
    })
    .then(() => {
      this.setState({
        redirect: true,
      })
    })
    .catch (error => {console.log(error)
  })
}
  handelOnChange = (event)=> {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    })
    console.log(this.state);
    
  }

  render() {
    const {title, image, type, price, numHab, numAseos, redirect, referencia, description,} = this.state
    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
          <label htmlFor="title">Titulo de la vivienda</label>
          <input type="text" id="title" placeholder="" value={title} name= "title" onChange={this.handelOnChange }></input>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" placeholder="" value={image} name= "image" onChange={this.handelOnChange }></input>
          <label htmlFor="price">Precio</label>
          <input type="number" id="price" placeholder="" value={price} name= "price" onChange={this.handelOnChange }></input>
          <label htmlFor="type">Tipo de vivienda</label>
          <select name='type' onChange={this.handelOnChange } value={type} id="type">
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
          </select>
          <label htmlFor="numHab">Numero de habitaciones</label>
          <input type="number" id="numHab" placeholder="" onChange={this.handelOnChange } name= "numHab" value={numHab} ></input>
          <label htmlFor="referencia">Numero de referencia</label>
          <input type="number" id="referencia" placeholder="" onChange={this.handelOnChange } name= "referencia" value={referencia} ></input>
          <label htmlFor="numAseos">Baños</label>
          <input type="number" id="numAseos" placeholder="" onChange={this.handelOnChange } name= "numAseos" value={numAseos} ></input>
          <label htmlFor="description">Descripcion de la vivienda</label>
          <input type="description" id="description" placeholder="" onChange={this.handelOnChange } name= "description" value={description} ></input>

          <button type='submit'>Añadir</button>
        </form>
        {redirect ? <Redirect to = '/privatelist'/> : null}
      </div>
    )
  }
}

export default withAuth(CrearVivienda);