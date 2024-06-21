import React from 'react';
import styled from 'styled-components';
import {UseGlobal} from "../index";
import Whatsapp from "../Assets/whatsapp.png";
import Swal from "sweetalert2";
const Contactanos = () => {
  const {campos,GetCampos,setCampos} = UseGlobal();
  const {nombre,apellido,correo,telefono,mensaje} = campos;
  const sendMessage = (e)=>{
    e.preventDefault();
    const Telefono = "95348921"
    const url = `https://api.whatsapp.com/send?phone=504${Telefono}&text=
      *Asunto Consulta a cliente IDESGC*%0A
      *Secretaria de gobernacion y justicia centralizada*%0A
      *Nombre de la persona que solicita informacion:*%0A
      ${nombre} ${apellido}%0A
      *Direccion de correo electrico:*%0A
      ${correo}%0A
       *Numero de telefono:*%0A
      ${telefono}%0A
      *Mensaje indicado por la persona:*%0A
      ${mensaje}`;
      Swal.fire({
        position:"top-end",
        icon: "success",
        title: "Mensaje Enviado",
        showConfirmButton: false,
        timer: 2500,
      });
      window.open(url); 
      setCampos({
        nombre:"",
        apellido:"",
        correo:"",
        telefono:"",
        mensaje:""
      })
  };
  return (
    <Container>
      <div className="InfoContactanos">
      <h1>¿Estás listo para explorar?</h1>
      <h3>¡Únete a IDESGC hoy mismo y comienza a disfrutar de la experiencia de encontrar productos georreferenciados de manera rápida y sencilla!</h3>
      <span>¿Tienes un proyecto en mente? Envíanos un mensaje.</span>
      <img src={Whatsapp} alt="IconoWhatsapp"/>
      </div>
      <form className='Formulariowhatsapp' onSubmit={sendMessage}>
      <div className="Grid1">
      <input type="text" name="nombre" value={nombre}  onChange={GetCampos} placeholder='Nombre' className='Input1'/>
      <input type="text" name="apellido" value={apellido} onChange={GetCampos} placeholder='Apellido' className='Input2'/>
      </div>
      <div className="grid2">
      <input type="text" name="correo" value={correo} onChange={GetCampos} placeholder='Correo' className='Input3'/>
      <input type="text" name="telefono" value={telefono} onChange={GetCampos} placeholder='Telefono' className='Input3'/>
      </div>
      <div className='grid3'>
      <textarea name="mensaje" rows="10" cols="70" placeholder='Mensaje' 
                className='TextoGrande' onChange={GetCampos} value={mensaje}></textarea>
      </div>
      <input type="submit" value="Enviar Mensjae" className='Enviar'/> 
      </form>
      
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
background-color:#3c3f45;
margin-bottom: 10px;
.InfoContactanos{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap:10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  h1{
    color: white;
    text-shadow: 2px 2px 2px 2px yellow;
    font-weight: 900;
    text-align: center;
  }
  h3{
    color: white;
    text-align: center;
    font-size: 20px;
    text-transform: inherit;
    margin-bottom: 10px;
  }
  span{
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  img{
    width: 45px;
    height: 45px;
    margin-bottom: 20px;
  }
}
.Formulariowhatsapp{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  height: 600px;
  margin: auto;
  .Grid1{
    width: 100%;
    display: flex;
    gap:10px;
    .Input1{
      width: 50%;
      padding: 10px 10px;
    }
    .Input2{
      width: 50%;
      padding: 10px 10px;
    }
  }
  .grid2{
    width: 100%;
    display: flex;
    gap:10px;
    .Input3{
      width: 50%;
      padding: 10px 10px;
    }
  }
  .grid3{
    width: 100%;
    .TextoGrande{
      width: 100%;
    }
  }

  .Enviar{
    display: block;
    width: 100%;
    padding: 10px 0;
    background-color: cyan;
    color:white;
    font-size: 20px;
    font-weight: bold;
  }

}
@media screen and (max-width:697px){
  .InfoContactanos{
    h1{
      font-size: 20px;
    }
    h3{
      font-size: 18px;
    }
    span{
      font-size: 15px;
    }
  }
  .Formulariowhatsapp{
    width: 100%;
  }
}

`;
export default Contactanos;
