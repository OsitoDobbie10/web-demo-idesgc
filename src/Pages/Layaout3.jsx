import React from 'react'
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import {SSlidar,MenuHambur} from "../index";
import { Device } from '../Style/BreakPoinst';
import { useState } from 'react';
const Layout3 = () => {
  const [openslider,setOpenslider] = useState(false);
  return (
    <Container className={openslider ? "active": ""}>
    <div className="contentsidebar">
    <SSlidar openslider={openslider} setOpenslider={setOpenslider}/>
    </div>
    <div className="menuhambur">
    <MenuHambur/>
    </div>
    <ContainerBody>
    <Outlet/>
    </ContainerBody>
    </Container>
  )
}
const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
transition: 0.3s ease-in-out;
.contentsidebar{
    display: none;
}
.menuhambur{
        display: block;
        position: absolute;
        left: 20px;
    }
@media ${Device.tablet}{
    grid-template-columns: 75px 1fr;
    &.active{
        grid-template-columns: 230px 1fr;
    }
    .contentsidebar{
        display: initial; 
    }
    .menuhambur{
        display: none;
    }
   
}
`
const ContainerBody = styled.div`
grid-column: 1;
width: 100%;
@media ${Device.tablet}{
    grid-column: 2;
}
`

export default Layout3;
