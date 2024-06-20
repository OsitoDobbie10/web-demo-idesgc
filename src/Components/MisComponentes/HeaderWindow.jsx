import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IMGIDE from "../../Assets/IDE SGC.png";
import {motion} from "framer-motion"
const HeaderWindow = () => {
  return (
    <Container>
    <div className="leftHeaderWin">
    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={IMGIDE} alt="ImagenIDE"/>
    </div>
    <div className="RigthWin">
    <NavLink className="LinkWindowItem" to="/">Inicio</NavLink>
    <NavLink className="LinkWindowItem" to="/Contactanos">Contactanos</NavLink>
    <NavLink className="LinkWindowItem" to="/SobreNosotros">SobreNosotros</NavLink>
    <motion.span 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="SpanRegis"><NavLink className="NavSpan"  to="/Ingresar">Registro</NavLink></motion.span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 150px;
display: flex;
align-items: center;
background: cyan;
color:white;
font-weight: 800;
.leftHeaderWin{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
}
.RigthWin{
    width: 70%;
    height: 100%;
    display: flex;
    gap:20px;
    justify-content: center;
    align-items: center;
    .SpanRegis{
        background-color: rgba(255,255,255,0.7);
        padding:10px 20px;
        .NavSpan{
          text-decoration: none;
          color: black;
        }
      }
    .LinkWindowItem{
        font-size: 25px;
        font-weight: bold;
        text-transform: none;
        color: white;
        text-decoration: none;
        &:hover{
            cursor: pointer;
        }
  
}}

`;
export default HeaderWindow;
