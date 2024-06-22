import {Outlet,useLocation} from 'react-router-dom'
import {styled}  from "styled-components"
import {UseGlobal,HeaderMobile,HeaderWindow,rutas} from "../index"
const Layout = () => {
  const {mobile,openHeader,ChangeHeader,closeHeader} = UseGlobal();
  const location = useLocation();
  return (
    <Container>
    {
      mobile === true && openHeader === false ?
     <HeaderMobile rutas={rutas}/>
      :
      <HeaderWindow/>
    }
    <div>
    <Outlet/>
    </div>
    </Container>
  )
}
const Container = styled.div`
position: sticky;
top: 0;
`;
export default Layout
