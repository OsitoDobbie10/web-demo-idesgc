import styled from "styled-components"
import {ItemTodosMapas} from "../../index"
const TodosMapas = ({array}) => {
  return (
    <Container>
    {
        array.map((data)=>{
            return <ItemTodosMapas data={data} key={data.id}/>
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
export default TodosMapas
