
import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js'
import Card from '../components/Card'


class ViviendaDetail extends Component {

  state = {
    vivienda: []
  }


componentDidMount(){
const {id} = this.props.match.params;
console.log(this.props.match.params)
viviendaBackendService.getOneVivienda(id)
// axios.get(`https://api.magicthegathering.io/v1/cards/${id}`)

.then((response)=> {
  console.log(response)
this.setState({
  vivienda: response.data
})
})
.catch((error) => {
  console.log(error)
})
}

goToPreviousPage = () => {
  this.props.history.goBack()
  //Si hacemos goBack().goBack() iriamos dos pantallas atras
}
render() {
  console.log('Hola', this.state.vivienda)
  const {vivienda } = this.state
    return (
      <div className = 'image-container'>
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
                descripcion={vivienda.descripcion}
                />
               <p>Estoy interesado en recibir más información de esta vivienda: </p>
               <Link to='/recibirinformacion'>Recibir informacion</Link>
        <button onClick={this.goToPreviousPage}>Volver a la lista</button>
        {/* { vivienda ? <img src = {image} alt={title} className='image-details'/>: <p>Loading....</p>} */}
        
      </div>
    )
  }
}
export default  withAuth(ViviendaDetail);