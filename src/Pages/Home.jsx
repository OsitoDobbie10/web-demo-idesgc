import React from 'react';
import { styled } from 'styled-components';
import {Cover,Info1, Objetivos, ScrollToTop,Footer} from "../index"
const Home = () => {
  return (
    <Container>
    <ScrollToTop/>
    <Cover/>
    <Info1/>
    <Objetivos Testimonios="Objetivos de IDESGC"
               They="Objetivos"
                Say="IDESGC"/>
    <Footer/> 
    </Container>
  )
}
const Container = styled.div`
background-color: #3c3f45;
`;
export default Home;