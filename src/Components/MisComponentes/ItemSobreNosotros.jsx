import styled from 'styled-components';
import { motion } from "framer-motion";
const ItemSobreNosotros = ({imagen,titulo,texto}) => {
  const transition1 = {
    type: "spring",
    stiffness: 260,
    damping: 30
  };
  const transition2 =  {
    type: "spring",
    stiffness: 260,
    damping: 40
  };
  return (
    <Container>
    <div className="arriba">
    <motion.img 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    src={imagen} alt="ImgText"/>
    <motion.h3 
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={transition1}
    className='TitleItem'>{titulo}</motion.h3>
    </div>
    <motion.p className='TextoQueDice'
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={transition2}
    >{texto}</motion.p>
    </Container>
  )
}
const Container = styled.div`
width: 600px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
gap:15px;
.arriba{
    display: flex;
    justify-content: center;
    gap:20px;
    align-items: center;
   img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
   }
   .TitleItem{
    color:aqua;
    font-weight: 900;
   }
}
.TextoQueDice{
    color:white;
    font-size: 15px;
    text-align: justify;
}


`;
export default ItemSobreNosotros
