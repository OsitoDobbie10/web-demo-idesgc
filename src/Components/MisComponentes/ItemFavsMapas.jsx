import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import {BorrarFavoritoBDB} from "../../index"
const ItemFavsMapas = ({data}) => {
  const {Categoria,imagen,descp,url,tipo,id,idUsuario} = data;
  const GetFavs = async()=>{
    let p = {idUsuario:idUsuario,id:id};
    await BorrarFavoritoBDB(p);
  }
  return (
    <Container>
    <img src={imagen} alt={descp}/>
    <span className="ItemMap1">{tipo}</span>
    <span className="ItemMap2">{Categoria}</span>
    <span className="ItemMap3">{descp}</span>
    <div className="FooterItemMap">
    <a href={url}>Lanzar</a>
    <span onClick={GetFavs}><BiTrash/></span>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 300px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
gap:10px;
box-shadow: 4px 2px 2px 4px gray;
img{
  width: 250px;
  margin:auto;
  height: 150px;
  object-fit: cover;

}
.ItemMap1{
  text-align: center;
  color:green;
  font-weight: bold;
  font-size: 12px;
}

.ItemMap2{
  font-weight: bold;
  font-size: 17px;
  text-align: center;
}

.ItemMap3{
  font-weight: 400;
  font-size: 10px;
  text-align: center;
}

.FooterItemMap{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap:20px;
  a{
    display: block;
    padding: 10px 20px;
    background-color: aqua;
    border-radius: 5px;
    font-size: 10px;
    color: white;
    &:hover{
      opacity:0.6;
      cursor: pointer;
    }
  }
  span{
    font-size:20px;
    font-weight: bold;
    margin-bottom: 20px;
    &:hover{
      cursor:pointer;
    }
  }
}


`;
export default ItemFavsMapas;
