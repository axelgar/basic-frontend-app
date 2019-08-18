import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';




function RecibirInformacion(props) {
  const {isLoggedIn, component: Component, ...rest} = props;
  //pasamos component a mayusculas para que lo entienda React
  return (
    
    <>
    <h1>Recibir informacion</h1> 


    {/* <NavBar /> */}
    {/* {isLoggedIn ?  <Route render={(props) => {
      return <Component {...props} />
    }} 
    {...rest}
    /> : <Redirect to= '/' />} */}
    
    </>
     
    
  )
}
export default withAuth (RecibirInformacion)




// const nodemailer = require('nodemailer');
// require('dotenv').config();

// function sendContactMail (mail, name, dogName) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ruquApp@gmail.com',
//       pass: process.env.MAILPASS
//     }
//   });

//   const mailOptions = {
//     from: 'ruquApp@gmail.com',
//     to: mail,
//     subject: 'New message in Ruqu App',
//     text: '',
//     html: `<img src="https://res.cloudinary.com/ruquapp/image/upload/v1564566601/ruqu%20resources/ruqu-logo_lushya.png" width="200px">
//       <p>Hi ${name},</p>
//       <p>The owner of ${dogName} thinks you might have found it! You have a new private message with the contact information. Please go to your Ruqu dashboard to see the new message.</p>
//       <p>Thank you for your help!</p>
//       <p></p>
//       <p>Ruqu team</p>`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };
