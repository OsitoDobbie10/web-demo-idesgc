import styled from "styled-components"
import {UseGlobal,AccesoRapido,ViewRestaurantes,MensajeNoHayFavs,ContenidosFavs} from "../index";
import { useQuery } from '@tanstack/react-query';
import { BiSolidUser } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import PerfilImg from "../Assets/mapa-y-ubicacion.png";
const Perfil = () => {
  const {token} = UseGlobal();
  const {ArregloFavsMapas,showFavsMaps} = ViewRestaurantes();
  useQuery({queryKey:["MapasFavoritos"],queryFn:()=>showFavsMaps()});
  const longCondicional = ArregloFavsMapas.length;
  let condicionalfavs = longCondicional <= 0 ? true : false;
  return (
    <Container>
    <div className="primeraParte">
    <div className="InicioPerfil">
    <h3>BIENVENIDO(A)</h3>
    <span>{token.user.user_metadata.first_name}</span>
    </div>
    <div className="iconos">
    <span>{<BiSolidUser/>}</span>
    </div>
    </div>
    <div className="Accesos">
    <span>Accesos Rápidos</span>
    <div className="ContenidoAccesos">
    <AccesoRapido icono={<BiSearchAlt/>} dato1="Explorar Mapas" ruta="/Dashboard"/>
    <AccesoRapido icono={<BiSolidUser/>} dato1="Tu cuenta" 
                  dato2={token.user.user_metadata.first_name} ruta="/configurar"/>
    </div>
    </div>
    <section className="contenedorfavsperfil">
    <div className="temaFavs">
    <span className="TituloFavs">{<BiSolidStar/>}</span>
    <span className="TituloFavs">Favoritos</span>
    </div>
    <div className="elementosFavsPerfil">
    {
      condicionalfavs ? <MensajeNoHayFavs 
                         imagen={PerfilImg}
                         mensage="Aún no tienes mapas favoritos"
                         ruta="/Dashboard"/> :  <ContenidosFavs array={ArregloFavsMapas}/>
    }
    </div>
    </section>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
.primeraParte{
  margin-top: 25px;
  display: flex;
  position: relative;
  left: 20px;
  .InicioPerfil{
    display: flex;
    flex-direction: column;
    gap:20px;
  h3{
    font-weight: 900;
  }
  span{
    font-weight: 500;
    font-size: 30px;
  }
}
.iconos{
  position: absolute;
  top:20px;
  right: 100px;
  span{
    font-size: 30px;
    color:black;
    &:hover{
      cursor: pointer;
    }
  }
}
}
.Accesos{
 margin-top: 28px;
 display: flex;
 flex-direction: column;
 gap:24px;
 margin-bottom: 25px;
 position: relative;
 left:20px;
 span{
  font-weight: bold;
  font-size: 15px;
 }
 .ContenidoAccesos{
  display: flex;
  gap:35px;

 }
}
.contenedorfavsperfil{
  width: 100%;
  position: relative;
  left: 20px;
  display: flex;
  flex-direction: column;
  margin-top:10px;
  .temaFavs{
    display: flex;
    gap:15px;
    margin-bottom: 10px;
    align-items: center;
    .TituloFavs{
      font-weight: bold;
      font-size: 25px;
    }

  }

}

`;
export default Perfil
