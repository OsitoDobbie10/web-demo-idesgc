import {objetivos} from "../../index";
import { useState } from "react";
import { motion } from "framer-motion";
import Derecha from "../../Assets/flecha Derecha.png";
import Izquierda from "../../Assets/flecha Izquiersa.png";
import "./Objetivos.css";
const Objetivos = ({Testimonios,They,Say}) => {
    const [selected,setSelected] = useState(0);
    const transition = {type:"spring",duration:3.5};
    const longitud = objetivos.length;
    const cardVariants3= {
      offscreen: {
        y: 300
      },
      onscreen: {
        y: 50,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.5
        }
      }
    };
  return (
    <motion.div className="Testimonios"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 1 }}
    variants={cardVariants3}>
      <div className="left-t">
      <span style={{color:'white'}}>{Testimonios}</span>
      <span className="stroke-text">{They}</span>
      <span>{Say}</span> 
      <motion.span
       key={selected}
       initial={{opacity:0,x:-100}}
       animate={{opacity:1,x:0}}
       exit={{opacity:0,x:100}}
       transition={transition}>{objetivos[selected].descpob}</motion.span>
       <span style={{color:'orange',fontWeight:'bold',fontSize:"20px"}}>
       {objetivos[selected].dataob}
       </span>
    </div>
    <div className="rigth-t">
           <motion.img
           key={selected}
           initial={{opacity:0,x:-100}}
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:100}}
           transition={transition}
           src={objetivos[selected].imagen} alt="" />
           <div className="obj1"></div>
           <div className="obj2"></div>
           <div className="arrows">
            <img 
            src={Izquierda}
             alt=""
             onClick={()=>{
              selected === 0 ? setSelected(longitud-1):
                               setSelected((prev)=> prev -1)}}
              />
            <img 
            src={Derecha}
            alt=""
            onClick={()=>{
              selected === longitud - 1 ? setSelected(0):
                                         setSelected((prev)=> prev + 1)}}/>
         </div>
        </div>
    </motion.div>
  )
}

export default Objetivos
 