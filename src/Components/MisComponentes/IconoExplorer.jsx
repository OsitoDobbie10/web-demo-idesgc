import styled from "styled-components"
const IconoExplorer = ({icono,referencia,funcion}) => {
  return (
    <Container onClick={funcion} >
    <span className="iconoGIS">{icono}</span>
    <span className="iconoGIS">{referencia}</span>
    </Container>
  )
}
const Container = styled.div`
width: 200px;
height: 100px;
display: flex;
gap:14px;
align-items: center;
&:hover{
    cursor: pointer;
}
.iconoGIS{
    font-size: 15px;
    color: black;
    font-weight: bold;
    &:hover{
        color:aqua;
    }
}
`;
export default IconoExplorer;
