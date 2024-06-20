import styled from "styled-components"
import {ItemFavsMapas} from "../../index";
const ContenidosFavs = ({array}) => {
  return (
    <Container>
      {
        array.map((data)=>{
            return <ItemFavsMapas data={data} key={data.id}/>
        })
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
export default ContenidosFavs
