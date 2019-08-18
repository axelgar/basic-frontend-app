import React, { Component } from 'react'
import withAuth from './withAuth.js'
import viviendaBackendService from '../services/viv-backend-service'
import {Redirect} from 'react-router-dom'
import FileComponent from './FileComponent'


class CrearVivienda extends Component {
  state = {
    title: 'Paco eres tonto',
    image: [],
    clase: 'Alquiler',
    type: 'piso',
    ciudad: 'Alicante',
    direccion: '',
    price: 0,
    metros: 0,
    numHab: 0,
    NumAseos: 0,
    numGarajes: 0,
    piscina: 'No',
    jardin:'No',
    referencia: 0,
    description: '',
    nombrePropietario: '',
    telefonoPropietario: '',
    mailPropietario: '',
    redirect: false,
  };

  handelSubmit= (event) => {
    const {title, type, image, price, numHab, numAseos, clase,referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario} = this.state
    event.preventDefault();
    viviendaBackendService.addOneVivienda({
    title,
    clase,
    image,
    type,
    ciudad,
    direccion,
    metros,
    price,
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
    .then(() => {
      this.setState({
        redirect: true,
      })
    })
    .catch (error => {console.log(error)})
  };

  handleOnChange = (event)=> {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
    window.state = this.state;
  };

  onUploadFinished = filename => {
    this.setState({image: this.state.image.concat(filename)});
  };

  render() {
    const {title, image, clase, type, price, numHab, numAseos, piscina, jardin, numGarajes, redirect, ciudad, referencia, description,direccion, metros,nombrePropietario,telefonoPropietario, mailPropietario} = this.state
    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
          <label htmlFor="clase">Venta o alquiler</label>
          <select name="clase" onChange={this.handleOnChange } value={clase} id="clase">
            <option value='venta'>Venta</option>
            <option value='alquiler'>Alquiler</option>
          </select>
          <label htmlFor="title">Titulo de la vivienda</label>
          <input type="text" id="title" placeholder="" value={title} name= "title" onChange={this.handleOnChange }></input>
          
          <label htmlFor="image">Image</label>
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
          <FileComponent id="image" onUploadFinished={this.onUploadFinished}/>
          </label>
          
         
          <label htmlFor="price">Precio</label>
          <input type="number" id="price" placeholder="" value={price} name= "price" onChange={this.handleOnChange }></input>
         
          <label htmlFor="type">Tipo de vivienda</label>
          <select name='type' onChange={this.handleOnChange } value={type} id="type">
            <option value='piso'>Piso</option>
            <option value='chalet'>Chalet</option>
            <option value='planta baja'>Planta baja</option>
            <option value='bungalow'>Bungalow</option>
            <option value='apartamento'>Apartamento</option>
            <option value='atico'>Atico</option>
            </select>
      
          <label htmlFor="ciudad">Ciudad</label>
          <select name="ciudad" onChange={this.handleOnChange } value={ciudad} id="ciudad">
            <option value='Alicante'>Alicante</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='San Juan'>San Juan</option>
            <option value='Campello'>Campello</option>
            <option value='El Altet'>El Altet</option>
            <option value='Agost'>Agost</option>
          </select>

          <label htmlFor="direccion">Direccion de la vivienda</label>
          <input type="text" id="direccion" placeholder="" onChange={this.handleOnChange } name= "direccion" value={direccion} ></input>
        
          <label htmlFor="metros">Metros de la vivienda</label>
          <input type="number" id="metros" placeholder="" onChange={this.handleOnChange } name= "metros" value={metros} ></input>
       
          <label htmlFor="numGarajes">Numero de garajes</label>
          <input type="number" id="numGarajes" placeholder="" onChange={this.handleOnChange } name= "numGarajes" value={numGarajes} ></input>

       
          <label htmlFor="numHab">Numero de habitaciones</label>
          <input type="number" id="numHab" placeholder="" onChange={this.handleOnChange } name= "numHab" value={numHab} ></input>
       
          <label htmlFor="referencia">Numero de referencia</label>
          <input type="number" id="referencia" placeholder="" onChange={this.handleOnChange } name= "referencia" value={referencia} ></input>
       
          <label htmlFor="numAseos">Baños</label>
          <input type="number" id="numAseos" placeholder="" onChange={this.handleOnChange } name= "numAseos" value={numAseos} ></input>

          <label htmlFor="jardin">Jardin</label>
          <select name="jardin" onChange={this.handleOnChange } value={jardin} id="jardin">
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>

          <label htmlFor="piscina">Piscina</label>
          <select name="piscina" onChange={this.handleOnChange } value={piscina} id="piscina">
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </select>
          
          <label htmlFor="description">Descripcion de la vivienda</label>
          <input type="text" id="description" placeholder="" onChange={this.handleOnChange } name= "description" value={description} ></input>
         
          <label htmlFor="nombrePropietario">Nombre del propietario</label>
          <input type="text" id="nombrePropietario" placeholder="" onChange={this.handleOnChange } name= "nombrePropietario" value={nombrePropietario} ></input>
        
          <label htmlFor="telefonoPropietario">TelefonoPropietario</label>
          <input type="text" id="telefonoPropietario" placeholder="" onChange={this.handleOnChange } name= "telefonoPropietario" value={telefonoPropietario} ></input>
        
          <label htmlFor="mailPropietario">Mail del propietario</label>
          <input type="email" id="mailPropietario" placeholder="" onChange={this.handleOnChange } name= "mailPropietario" value={mailPropietario} ></input>

          <button type='submit'>Añadir</button>
        </form>
        {redirect ? <Redirect to = '/privatelist'/> : null}
      </div>
    )
  }
}

export default withAuth(CrearVivienda);