import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'


function AnonRoute(props) {
  
  const {isLoggedIn, component: Component, ...rest} = props;
  //pasamos component a mayusculas para que lo entienda React
  return (
    <>
    {!isLoggedIn ?  <Route render={(props) => {
      return <Component {...props} />
    }} 
    {...rest}
    /> : <Redirect to= '/private' />}
    </>
     
    
  )
}
export default withAuth (AnonRoute)