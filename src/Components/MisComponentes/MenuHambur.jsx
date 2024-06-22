import {HeaderMobile,rutas2} from "../../index"
import styled from "styled-components"
const MenuHambur = () => {
  return (
    <Container>
    <HeaderMobile rutas={rutas2}/>
    </Container>
  )
}
const Container = styled.header`
width: 100%;
position: sticky;
top: 0;
`;
export default MenuHambur
