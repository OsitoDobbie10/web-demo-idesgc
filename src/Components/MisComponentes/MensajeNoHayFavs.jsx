import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const MensajeNoHayFavs = ({imagen,mensage,ruta}) => {
    const GoToExplored = useNavigate();
    const FGoToExplored = ()=>{
        GoToExplored(ruta);
    }
  return (
    <Container>
    <img src={imagen} alt="FavsNot"/>
    <span>{mensage}</span>
    <button 
    onClick={FGoToExplored}
    className='Boton'
    >Explorar Mapas</button>
    </Container>
  )
}
const Container = styled.div`
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:20px;
margin: auto;
img{
width: 150px;
height: 100px;
}
span{
    text-align: center;
    font-weight: 900;
    font-size: 18px;
}
.Boton{
    width: 200px;
    height: 50px;
    background-color: aqua;
    color: white;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
}

`;
export default MensajeNoHayFavs
