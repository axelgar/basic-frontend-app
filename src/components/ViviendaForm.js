import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'


export default class ViviendaForm extends Component {
  state = {
  title: '',
  image: '',
  type: 'undefined',
  ciudad: 'undefined',
  direccion: '',
  price: 0,
  metros: 0,
  numHab: 0,
  NumAseos: 0,
  numGarajes: 0,
  piscina: 'undefined',
  jardin:'undefined',
  clase: 'indefined',
  referencia: 0,
  description: '',
  nombrePropietario: '',
  telefonoPropietario: '',
  mailPropietario: '',
  

}
  componentDidMount () {
    const {title, type, image, price, clase,  numHab, numAseos, referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario, _id} = this.props.vivienda;
    this.setState({title, type, image, clase, price, numHab, numAseos, referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario,  _id});
  }

  handelonChange= (event) => {
    const {title, type, image, price, clase, numHab, numAseos, referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario, _id} = this.state
    event.preventDefault();

    viviendaBackendService.updateOneVivienda( _id, {
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
    clase,
    referencia,
    description,
    nombrePropietario,
    telefonoPropietario,
    mailPropietario
    })
    .then(()=> this.props.refreshData())
   }
   
  handleUpdate = (event)=> {
    const {name,value} = event.target;

    this.setState({
      [name]: value,
    })
  }

  render() {

    const {title, type, image, price, clase, numHab, numAseos, referencia, description, ciudad, direccion, metros, piscina, jardin,numGarajes, nombrePropietario, mailPropietario, telefonoPropietario, _id } = this.state


    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
                
                <p>Numero de referencia de la vivienda: {referencia}</p>
                <p>{title}</p>         
                <label htmlFor="title">Titulo de la vivienda</label>
                 <input type="text" 
                 id="title"
                 defaultValue={title} 
                 name= "title" 
                 onChange={this.handleUpdate }
                 />

                <p>{clase}</p>
                <p>{title}</p>         
                <label htmlFor="title">Titulo de la vivienda</label>
                 <input type="text" 
                 id="title"
                 defaultValue={title} 
                 name= "title" 
                 onChange={this.handleUpdate }
                 />

                 <img src={image} alt={title}/>
                 <label htmlFor="image">Image</label>
                 <input type="text" 
                 id="image" 
                 defaultValue={image} 
                 name= "image" 
                 onChange={this.handleUpdate}
                 />

                <p>Tipo de vivienda: {type}</p>
                <label htmlFor="type">Tipo de vivienda</label>
                <select name='type' onChange={this.handleUpdate } value={type} id="type">
                  <option value='Piso'>Piso</option>
                  <option value='Chalet'>Chalet</option>
                  <option value='Planta baja'>Planta baja</option>
                  <option value='Bungalow'>Bungalow</option>
                  <option value='Apartamento'>Apartamento</option>
                  <option value='Atico'>Atico</option>
                </select>

                <p>Ciudad: {ciudad}</p>
                <label htmlFor="ciudad">Ciudad</label>
                <select name="ciudad" onChange={this.handelOnChange } value={ciudad} id="ciudad">
                  <option value='Alicante'>Alicante</option>
                  <option value='San Vicente'>San Vicente</option>
                  <option value='San Juan'>San Juan</option>
                  <option value='Campello'>Campello</option>
                  <option value='El Altet'>El Altet</option>
                  <option value='Agost'>Agost</option>
                </select>

                <p>direccion de la vivienda: {direccion}</p>
                <label htmlFor="direccion">Direccion de la vivienda</label>
                <input type="text" 
                id="direccion" 
                onChange={this.handelOnChange } 
                name= "direccion" 
                value={direccion} 
                />

                <p>Precio: {price}</p> 
                <label htmlFor="price">Precio</label>
                <input 
                  type="number"
                  id="price"
                  defaultValue={price}
                  name= "price"
                  onChange={this.handleUpdate}
                />
                
                <p>Metros cuadrados de la vivienda: {metros}</p>
                <label htmlFor="metros">Metros de la vivienda</label>
                <input type="number" 
                id="metros" 
                onChange={this.handelOnChange } 
                name= "metros" 
                value={metros} 
                />


                <p>Numero de habitaciones en la vivienda: {numHab}</p>
                <input type="number" 
                id="numHab" 
                onChange={this.handleUpdate } 
                name= "numHab" 
                defaultValue={numHab} 
                />

                <p>Numero de aseos en la vivienda: {numAseos}</p>
                <input type="number" 
                id="numAseos" 
                onChange={this.handleUpdate } 
                name= "numAseos" 
                defaultValue={numAseos} 
                />

                <p>Garaje: {numGarajes}</p>
                <label htmlFor="numGarajes">Numero de garajes</label>               
                <input type="number" 
                id="numGarajes" 
                placeholder="" 
                onChange={this.handelOnChange } 
                name= "numGarajes" 
                value={numGarajes} 
                />

                <label htmlFor="jardin">Jardin{jardin}</label>
                <select name="jardin" onChange={this.handelOnChange } value={jardin} id="jardin">
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                <label htmlFor="piscina">Piscina{piscina}</label>
                <select name="piscina" onChange={this.handelOnChange } value={piscina} id="piscina">
                  <option value='Si'>Si</option>
                  <option value='No'>No</option>
                </select>

                  <p>Datos de contacto:</p>

               <label htmlFor="nombrePropietario">Nombre del propietario {nombrePropietario}</label>
               <input type="text" 
               id="nombrePropietario" 
               placeholder="" 
               onChange={this.handelOnChange } 
               name= "nombrePropietario" 
               value={nombrePropietario} ></input>
        
               <label htmlFor="telefonoPropietario">TelefonoPropietario {telefonoPropietario}</label>
               <input type="text" 
               id="telefonoPropietario" 
               placeholder="" 
               onChange={this.handelOnChange } 
               name= "telefonoPropietario" 
               value={telefonoPropietario} ></input>
        
               <label htmlFor="mailPropietario">Mail del propietario {mailPropietario}</label>
               <input type="email" 
               id="mailPropietario" 
               placeholder="" 
               onChange={this.handelOnChange } 
               name= "mailPropietario" 
               value={mailPropietario} ></input>



                <p>Descripcion de la vivienda: {description}</p>
                <label htmlFor="description">Descripcion de la vivienda</label>
                <input type="description" 
                id="description" 
                onChange={this.handleUpdate } 
                name= "description" 
                defaultValue={description} 
                />
            
  
                <button type='submit'>Modificar</button>
              </form>
      </div>
    )
  }
}

//         <label htmlFor="image">Image</label>
//         <input type="text" id="image" placeholder="" value={image} name= "image" onChange={this.handleOnChange }></input>
//        
//      
//         
//         <label htmlFor="numHab">Numero de habitaciones</label>
//         <input type="number" id="numHab" placeholder="" onChange={this.handleOnChange } name= "numHab" value={numHab} ></input>
//         <label htmlFor="referencia">Numero de referencia</label>
//         <input type="number" id="referencia" placeholder="" onChange={this.handleOnChange } name= "referencia" value={referencia} ></input>
//         <label htmlFor="numAseos">Baños</label>
//         <input type="number" id="numAseos" placeholder="" onChange={this.handleOnChange } name= "numAseos" value={numAseos} ></input>
//         <label htmlFor="description">Descripcion de la vivienda</label>
//         <input type="description" id="description" placeholder="" onChange={this.handleOnChange } name= "description" value={description} ></input>