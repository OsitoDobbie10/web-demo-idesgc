import { BiSolidStar } from "react-icons/bi";
import { motion } from "framer-motion";
import "./ItemTodosMapas.css";
import {UseGlobal,InsertarFavsDBD} from "../../index";
const ItemTodosMapas = ({data}) => {
  const {Categoria,imagen,descp,url,tipo} = data;
  const {token} = UseGlobal();
  const AddFavorites = async()=>{
    let p = {
      Categoria:Categoria,
      imagen:imagen,
      descp:descp,
      url:url,
      idUsuario:token.user.id}; 
    await InsertarFavsDBD(p);
    }
  return (
    <motion.div
    className="ContainerItemTodosMapas"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
    <img src={imagen} alt={descp} className="ImgContainerItemTodosMapas"/>
    <span className="ItemMap1">{tipo}</span>
    <span className="ItemMap2">{Categoria}</span>
    <span className="ItemMap3">{descp}</span>
    <div className="FooterItemMap">
    <a href={url}>Lanzar</a>
    <span onClick={AddFavorites}><BiSolidStar/></span>
    </div>
    </motion.div>
  )
}

export default ItemTodosMapas;
