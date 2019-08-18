import React from 'react'

export default function PrivateCard(props) {
  return (
    <div>
        <h3>{props.title}</h3>
          {props.image.map((img) => {
                return (<img key={img} src={img}/>)
          })}
              <img src={props.image} alt={props.title}></img>
              <p>{props.clase}</p>
              <p>Tipo de vivienda: {props.type}</p>
              <p>Precio: {props.price}</p>
              <p>Ciudad: {props.ciudad}</p>
              <p>Direccion de la vivienda: {props.direccion}</p>
              <p>metros cuadrados: {props.metros}</p>
              <p>Numero de habitaciones: {props.numHab}</p>
              <p>Numero de baños: {props.numAseos}</p>
              <p>Numero de garajes:{props.numGarajes}</p>
              <p>Piscina: {props.piscina}</p>
              <p>Jardin: {props.jardin}</p>
              <p>Numero de referencia: {props.referencia}</p>
              <p>Descripcion de viviendas: {props.description}</p>
              <p>Nombre del propietario: {props.nombrePropietario}</p>
              <p>Telefono del propietario: {props.telefonoPropietario}</p>
              <p>Mail del propietario: {props.mailPropietario}</p>
    </div>
      )
    }
    