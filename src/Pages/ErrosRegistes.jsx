import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {SpinnerError} from '../index'
const ErrosRegistes = () => {
  return (
    <Error>
    <Login><Link to={'/Ingresar'} className='login'>Login</Link></Login>
    <SpinnerError/>
    <Mensaje>Sus credenciales no son correctas, registrese para poder ingresar..</Mensaje>
    </Error>
  )
}
const Error = styled.div`
position: relative;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.9); 
display: flex;
flex-direction: column;
justify-content: center;
`
const Mensaje = styled.h2`
text-align: center;
font-size: 25px;
color: white;
font-weight: bold;
@media screen and (max-width:768px){
  font-size: 15px;
}
`
const Login = styled.span`
position: absolute;
top:20px;
right:15px;
.login{
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
}
`
export default ErrosRegistes
