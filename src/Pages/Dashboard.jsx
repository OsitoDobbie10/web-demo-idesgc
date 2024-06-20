import {UseGlobal,ViewRestaurantes,IconoExplorer,
        InputsExplorer,arrayGIS,
        ArrayOrdenar,InputsExplorer2,TodosMapas,FavsMaps} from "../index";
import styled from "styled-components"
import { useQuery } from '@tanstack/react-query';
import { BiSolidUser } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidLayer } from "react-icons/bi";
import { motion } from 'framer-motion';
const Dashboard = () => {
  const {token,Gview,Filter1,Filter2,vista1,filtroMapas} = UseGlobal();
  const {ArregloMapas,showMaps} = ViewRestaurantes();
  const transition = {type:"spring",duration:4}
  useQuery({queryKey:["Mapas"],queryFn:()=>showMaps()});
  return (
    <Container>
    <div className="primeraParte">
    <div className="InicioPerfil">
    <h3>BIENVENIDO(A)</h3>
    <span>{token.user.user_metadata.first_name}</span>
    </div>
    <div className="iconos">
    <span>{<BiSolidUser/>}</span>
    </div>
    </div>
    <div className="conte1">
    <h3 className="Referenciah3">Explorar</h3>
    </div>
    <div className="ContenidoExplored">
    <div className="Explorer1">
    <IconoExplorer icono={<BiSolidLayer/>} 
                   referencia="Todos los mapas"
                   funcion={Gview}
                   />
    <IconoExplorer icono={<BiSolidStar/>}
                   referencia="Favoritos"
                   funcion={Gview}/>
    </div>
    <div className="Explorer2">
    <InputsExplorer text="Categorias" array={arrayGIS} funcion={Filter1}/>
    <InputsExplorer2 text="Ordenar" array={ArrayOrdenar} funcion={Filter2}/>
    </div>
    </div>
    <div 
    className="ConteinerMapsExplored">
    {
      vista1 ? <motion.div 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}>
               <TodosMapas array={ArregloMapas}/>
               </motion.div> : 
               <motion.div
               initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}>
               <FavsMaps/>
               </motion.div>
               
    }
    </div>

    </Container>
  )
}
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
.primeraParte{
  margin-top: 25px;
  display: flex;
  position: relative;
  left: 20px;
  .InicioPerfil{
    display: flex;
    flex-direction: column;
    gap:20px;
  h3{
    font-weight: 900;
  }
  span{
    font-weight: 500;
    font-size: 30px;
  }
}
.iconos{
  position: absolute;
  top:20px;
  right: 100px;
  span{
    font-size: 30px;
    color:black;
    &:hover{
      cursor: pointer;
    }
  }
}
}
.conte1{
  position: relative;
  left: 20px;
  margin-top:15px;
  .Referenciah3{
  font-size: 20px;
}
}
.ContenidoExplored{
  position: relative;
  left: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .Explorer1{
    display: flex;
    gap:10px;
    align-items: center;
  }
  .Explorer2{
    display: flex;
    gap:10px;
    align-items: center;
  }

}
.ConteinerMapsExplored{
  width: 90%;
  margin:auto;
  overflow:scroll;
  height: 400px;
}



`;
export default Dashboard
