
import React, { Component } from 'react'
import viviendaBackendService from '../services/viv-backend-service'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js'

class ViviendaDetail extends Component {

  state = {
    vivienda: null,
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
  const {} = this.state
    return (
      <div className = 'image-container'>
        <button onClick={this.goToPreviousPage}>Go back</button>
        {/* { vivienda ? <img src = {image} alt={title} className='image-details'/>: <p>Loading....</p>} */}
      </div>
    )
  }
}
export default  withAuth(ViviendaDetail);