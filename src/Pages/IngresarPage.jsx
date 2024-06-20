import {UseGlobal,Ingresar} from "../index";
import "../Style/Ingresar.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const IngresarPage = () => {
  const Atras = useNavigate();
  const Atras2 = useNavigate();
  const {error,logic} = UseGlobal();
  const FunctionAtras = ()=>{
    Atras("/");
  }
  const GoRegistro = ()=>{
    Atras2("/Registro");
  };
   return (
    <section className="Ingresar">
    <div className="ingresarMapea">
    <span onClick={FunctionAtras} className="BackHome">{<BiArrowBack/>}</span>
    <div className="textosingrear">
    <span className="Txxtextosingrear1">IDESGC</span>
    <span className="Txxtextosingrear2" >Plataforma de datos espaciales GIS a nivel nacional,
               <br /> Secretaria de gobernacion y justicia centralizada.
    </span>
    </div>
    </div>
    <div className="formularioingresar">
    <div className="InfoDataRegistro">
    <h1>IDESGC</h1>
    <h3>Bienvenido</h3>
    <span>Llena los siguientes campos con tus credenciales para ingresar.</span>
    </div>
    <Ingresar/>
    {
        error ? <span className='showmessaner'>{logic}</span> : <div></div>
    }
    <div className="GoLogin">
    <span className="GoLogin1">¿Aún no tienes cuenta? </span>
    <span className="GoLogin2" onClick={GoRegistro}>CREAR CUENTA</span>
    </div> 
    </div>
    </section>
  )
}

export default IngresarPage;
