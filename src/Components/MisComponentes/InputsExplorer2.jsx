import styled from "styled-components"
import { BiSolidDownvote } from "react-icons/bi";
import {UseGlobal,SelectFilter2} from "../../index"
const InputsExplorer = ({array,text,funcion}) => {
    let long = array.length;
    let title = `${text} (${long})`;
    const {abrirfiltro2} = UseGlobal();
  return (
    <Container>
    <span>Filtrar</span>
    <div className="contenidosfiltros">
    <span className="DatosFil">{title}</span>
    <span className="DatosFil" onClick={funcion}><BiSolidDownvote/></span>
    </div>
    {
        abrirfiltro2 ? <SelectFilter2 array={array}/>: <div></div>
    }
    </Container>
  )
}
const Container = styled.div`
width: 200px;
height: 100px;
display: flex;
flex-direction: column;
gap:5px;
span{
    font-weight: 400;
}
.contenidosfiltros{
    display: flex;
    gap:10px;
    .DatosFil{
        font-size: 15px;
        font-weight: 700;
        &:hover{
            cursor: pointer;
        }
    }

}

`;
export default InputsExplorer
