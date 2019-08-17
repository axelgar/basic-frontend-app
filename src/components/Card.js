import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h3>{props.title}</h3>
              <img src={props.image} alt={props.title}></img>
              <p>{props.type}</p>
              <p>{props.price}</p>
              <p>{props.city}</p>
              <p>{props.numHab}</p>
              <p>{props.numAseos}</p>
              <p>{props.referencia}</p>
              <p>{props.description}</p>
    </div>
  )
}

