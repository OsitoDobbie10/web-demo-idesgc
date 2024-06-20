import styled from "styled-components";
import {ViewRestaurantes,MensajeNoHayFavs,ContenidosFavs} from "../../index";
import IMG from "../../Assets/mapa-y-ubicacion.png";
import { motion } from "framer-motion";
const FavsMaps = () => {
 const {ArregloFavsMapas} = ViewRestaurantes();
 const longitud = ArregloFavsMapas.length;
 let condicionalfavs = longitud <= 0 ? true : false;
 const transition = {type:"spring",duration:4}

  return (
    <Container>
    {
        condicionalfavs ? <MensajeNoHayFavs imagen={IMG}
                            mensage="Aún no tienes mapas favoritos"
                            ruta="/Perfil"/> :<ContenidosFavs array={ArregloFavsMapas}/>
    }
    </Container>
  )
}
const Container = styled.div` 
width: 100%;
display: flex; 
flex-wrap: wrap;
justify-content: space-evenly;
gap:20px;
`;
export default FavsMaps
