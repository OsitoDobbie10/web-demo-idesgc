import styled from 'styled-components';
import Cover2 from "../../Assets/trabajar.png";
import {Referencias} from "../../index";
import Check from "../../Assets/comprobado.png";
import { motion } from 'framer-motion';
const Info1 = () => {
  const Variantes = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 5,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.5
      }
    }};
  const Variantes2 = {
      offscreen: {
        x: -200
      },
      onscreen: {
        x: 5,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 1.5
        }
    }};
  return (
    <Container>
    <motion.div className="ImagLeftInfo1"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 1 }}
    >
    <motion.img 
    variants={Variantes}
    src={Cover2} alt="ImagenCover2" />
    </motion.div>
    <motion.div className="InfoRigthInfo1"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 1 }}
    variants={Variantes2}
    >
    <span className='TitileInfoRigthInfo1'>
    IDESGC
    </span>
    <span className="referencias">
    Datos - Información - Análisis - Soluciones
    </span>
    <div className="EntradasLeft">
    {
      Referencias.map((ref)=>{
        return <motion.div className='elementosref'
                key={ref.id}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               <div className="izquierdarefcon">
                <img src={Check} alt="Check"/>
               </div>
               <div className='derecharefcon'>
               <h3>{ref.data1}</h3>
               <p className='descp'>{ref.datos2}</p>
               </div>
               </motion.div>
      })
    }
    </div>

    </motion.div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 600px;
display: flex;
background-color: #3c3f45;
color:white;
.ImagLeftInfo1{
  width: 50%;
  height: 100%;
  img{
    width: 90%;
    height: 100%;
  }
}
.InfoRigthInfo1{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap:20px;
  .TitileInfoRigthInfo1{
    font-size: 45px;
    font-weight: bold;
    color: white;
  }
  .referencias{
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  .EntradasLeft{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .elementosref{
      display: flex;
      gap:10px;
      height: 100px;
      width: 100%;
      .izquierdarefcon{
        width: 30px;
        height: 30px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .derecharefcon{
        display: flex;
        flex-direction: column;
        gap:10px;
        width: 600px;
        h3{
          font-size: 14px;
          font-weight: 700;
        }
        .descp{
          font-size: 12px;
          font-weight: 500;
          text-align: justify;
        }
      }
    }
  }
}
`;
export default Info1;
