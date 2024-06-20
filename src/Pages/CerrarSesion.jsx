import styled from "styled-components";
import {UseGlobal} from "../index";
import User from "../Assets/agregar-usuario.png";
import Cerrar1 from "../Assets/apagar.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CerrarSesion = () => {
  const {token} = UseGlobal();
  let cerrar = useNavigate();
  const Adios = ()=>{
    Swal.fire({
      title: "Estas seguro de cerrar sesion de IDESGC?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
      }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      cerrar("/");
    } else if (result.isDenied) {
      Swal.fire("Aun sigue tu sesion abierta", "", "Intenta de nuevo");
    }
  });
  }
  return (
    <Container>
    <div className="InicioPerfil">
    <h3>Hola estimado(a).</h3>
    <span>{token.user.user_metadata.first_name}</span>
    </div>
    <div className="imagen1">
    <img src={User} alt="Usuario"/>
    </div>
    <div className="Instrucciones">
    <span>Desea cerrar secion?</span>
    <img src={Cerrar1} alt="Listo" onClick={Adios}/>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 90%;
margin:auto;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:10px;
.InicioPerfil{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;
  h3{
    font-size: 25px;
    font-weight: 800;
    text-align: center;
  }
  span{
    font-size: 22px;
    font-weight: 800;
    text-align: center;
  }

}
.imagen1{
  width: 150px;
  height: 150px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.Instrucciones{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:10px;
span{
  font-size: 25px;
  font-weight: 800;
  text-align: center;
}
img{
  width: 150px;
  height: 150px;
  &:hover{
    cursor: pointer;
  }
}
}


`;
export default CerrarSesion
