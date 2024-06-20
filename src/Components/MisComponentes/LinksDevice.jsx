import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const LinksDevice = ({rutas}) => {
    //'/','/Contactanos','/SobreNosotros','/Registro'
  return (
    <Container>
    <NavLink className="LinkWindowItem1" to="/">Inicio</NavLink>
    <NavLink className="LinkWindowItem1" to="/Contactanos">Contactanos</NavLink>
    <NavLink className="LinkWindowItem1" to="/SobreNosotros">SobreNosotros</NavLink>
    <NavLink className="LinkWindowItem1" to="/Ingresar">Registro</NavLink>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
gap:5px;
justify-content: center;
.LinkWindowItem1{
    padding: 10px 10px;
    color: white;
    font-weight: 900;
    font-size: 15px;
    text-align: center;
    &:hover{
      cursor: pointer;
    }
}
`;
export default LinksDevice;
