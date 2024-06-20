import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const AccesoRapido = ({icono,dato1,dato2,ruta}) => {
    let Navegar = useNavigate();
    const NavFunction = ()=>{
        Navegar(ruta);
    }
  return (
    <Container onClick={NavFunction}>
    <span className='Icono1C'>{icono}</span>
    <span className='dato1Change'>{dato1}</span>
    <span className='dato2Change'>{dato2}</span>
    </Container>
  )
}
const Container = styled.div`
width: 250px;
height: 200px;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
border: 1px dashed black;
&:hover{
    cursor: pointer;
    background-color: rgba(15, 212, 234, 0.5);
}
.Icono1C{
    font-size: 35px;
    font-weight: 900;
    border-radius: 50%;
    margin-bottom: 40px;
}
.dato1Change{
    font-size: 15px;
}
.dato2Change{
    font-size: 10px;
}

`;
export default AccesoRapido
