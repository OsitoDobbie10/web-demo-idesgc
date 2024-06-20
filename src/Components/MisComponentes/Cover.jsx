import React from 'react'
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import './Cover.css';
const Cover = () => {
  const Navegar1 = useNavigate();
  const funNavegar1 = ()=>{
    Navegar1("/Registro");
  }
  return (
    <div className='CoverIDE'>
    <div className="elem1">
    <motion.article className='Aticulo'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    >
    <h1>Bienvenido a IDESGC</h1>
    <p className='Texto1' >
    Ofrecemos una robusta y versátil plataforma georreferenciada que se adapta a tus
    necesidades. Nuestra plataforma en línea permite a los usuarios encontrar y visualizar
    datos relacionados con ubicaciones geográficas específicas, revolucionando la manera en
    que obtienes información y descubren soluciones, asegurando una experiencia emocionante y exitosa.
    </p>
    <motion.button 
    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
     className='BotonCover' onClick={funNavegar1}>Descubre Mas</motion.button>
    </motion.article>
    </div>
    <div className="elem2">
    </div>
    </div>
  )
}

export default Cover;
