import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'


export default class ViviendaForm extends Component {
  state = {
    title: '',
    type: undefined,
    image: '',
    price: 0,
    numHab: 0,
    NumAseos: 0,
    referencia: 0,
    description: '',
  }


  componentDidMount () {
    const {title, type, image, price, numHab, numAseos, referencia, description, _id} = this.props.vivienda;
    this.setState({title, type, image, price, numHab, numAseos, referencia, description,  _id});
  }

  handelSubmit= (event) => {
    const {title, type, image, price, numHab, numAseos, referencia, description, _id} = this.state
    event.preventDefault();

    viviendaBackendService.updateOneVivienda( _id, {
      title,
      image,
      type,
      price ,
      numHab,
      numAseos,
      referencia,
      description,
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

    const {title, image, type, price, numHab, numAseos, referencia, description } = this.state


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

                <p>Precio: {price}</p> 
                <label htmlFor="price">Precio</label>
                <input 
                  type="number"
                  id="price"
                  defaultValue={price}
                  name= "price"
                  onChange={this.handleUpdate}
                />

                <img src={image} alt={title}/>
                <label htmlFor="image">Image</label>
                <input type="text" 
                id="image" 
                defaultValue={image} 
                name= "image" 
                onChange={this.handleUpdate}
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
//         <input type="text" id="image" placeholder="" value={image} name= "image" onChange={this.handelOnChange }></input>
//        
//      
//         
//         <label htmlFor="numHab">Numero de habitaciones</label>
//         <input type="number" id="numHab" placeholder="" onChange={this.handelOnChange } name= "numHab" value={numHab} ></input>
//         <label htmlFor="referencia">Numero de referencia</label>
//         <input type="number" id="referencia" placeholder="" onChange={this.handelOnChange } name= "referencia" value={referencia} ></input>
//         <label htmlFor="numAseos">Baños</label>
//         <input type="number" id="numAseos" placeholder="" onChange={this.handelOnChange } name= "numAseos" value={numAseos} ></input>
//         <label htmlFor="description">Descripcion de la vivienda</label>
//         <input type="description" id="description" placeholder="" onChange={this.handelOnChange } name= "description" value={description} ></input>