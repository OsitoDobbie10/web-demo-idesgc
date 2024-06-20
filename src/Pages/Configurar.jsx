import React from 'react';
import styled from 'styled-components';
import {MensajeNoHayFavs} from "../index";
import Imagen1 from "../Assets/la-configuracion-de-privacidad.png";
const Configurar = () => {
  return (
    <Container>
    <div className="ponerConfig">
    <MensajeNoHayFavs imagen={Imagen1} mensage="Aun no esta habilitada esta opcion" ruta="/Perfil"/>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
.ponerConfig{
  margin:200px auto;
}

`;
export default Configurar;
