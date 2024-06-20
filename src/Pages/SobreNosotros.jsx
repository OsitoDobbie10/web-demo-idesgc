import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import {ItemSobreNosotros} from "../index";
import Elemento1 from "../Assets/Mapa1.png";
import Elemento2 from "../Assets/Mapa2.png";
import Elemento3 from "../Assets/acercarse.png";
import Elemento4 from "../Assets/alfiler-de-mapa.png"
const SobreNosotros = () => {
  const transition1 = {type:"spring",duration:4.5};
  const transition2 = {type:"spring",duration:6.5};
  let text1 = `Con IDESGC, puedes explorar tu entorno de manera precisa y eficiente. 
               Nuestros mapas georreferenciados te llevarán directamente a lo que estás buscando.`;
  let text2 = `Con IDESGC, la exploración geográfica se convierte en una experiencia digital fascinante y accesible. 
               Nuestra plataforma te ofrece un mundo de beneficios mientras navegas por información geográfica en línea.`;
  let text3 = `Carreteras, manzaneros , centros poblados, curvas de nivel, etc. , 
               cubrimos una amplia gama de categorías para asegurarnos de que siempre encuentres lo que necesitas.`;
  let text4 = `Imagina poder explorar ciudades, vecindarios y áreas geográficas desde la comodidad de tu dispositivo.
               IDESGC te permite visualizar y navegar por mapas interactivos, brindándote una vista panorámica de lugares, 
               calles, valles, montañas, ríos y puntos de interés.`;
  return (
    <Container>
    <div className='CamposHeader'>
    <motion.h1
    className='TituloSobreNosotros'
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:100}}
    transition={transition1}
    >Que es IDESGC</motion.h1>
    <motion.h2
    className='TituloSobreNosotros2'
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:100}}
    transition={transition2}
    >Infraestructura de datos espaciales GIS</motion.h2>
    </div>
    <div className="contenidoNosotros">
    <ItemSobreNosotros imagen={Elemento1} 
                       titulo="Precisión y Comodidad"
                       texto={text1}/>
    <ItemSobreNosotros imagen={Elemento2}
                       titulo="Experiencia Digital"
                       texto={text2}/>
    <ItemSobreNosotros imagen={Elemento3}
                       titulo="Variedad de Categorías"
                       texto={text3}/>
    <ItemSobreNosotros imagen={Elemento4}
                       titulo="Descubre Lugares"
                       texto={text4}/>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(0,0,0,0.7);
color: white;
.CamposHeader{
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap:10px;
  .TituloSobreNosotros{
    text-align: center;
    font-weight: bold;
  }
  .TituloSobreNosotros2{
    text-align: center;
    font-weight: bold;
  }
}
.contenidoNosotros{
  width: 90%;
  height: 100%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:20px;

}

`
export default SobreNosotros
