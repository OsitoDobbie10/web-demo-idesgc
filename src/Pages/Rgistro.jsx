import {UseGlobal,SignUp} from "../index";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "../Style/Ingresar.css";
const Rgistro = () => {
  const {show,animandoModal} = UseGlobal();
  const Atras3 = useNavigate();
  const Atras4 = useNavigate();
  const FunctionAtrasIngresar = ()=>{
    Atras3('/Ingresar');
  };
  return (
    <section className="Ingresar">
    <div className="ingresarMapea">
    <span onClick={FunctionAtrasIngresar} className="BackHome">{<BiArrowBack/>}</span>
    <div className="textosingrear">
    <span className="Txxtextosingrear1">IDESGC</span>
    <span className="Txxtextosingrear2" >Plataforma de datos espaciales GIS a nivel nacional,
               <br /> Secretaria de gobernacion y justicia centralizada.
    </span>
    </div>
    </div>
    <div className="formularioingresar">
    <div className="InfoDataRegistro1">
    <h1>IDESGC</h1>
    <h3>Crear Cuenta</h3>
    <span>Llena los siguientes campos para crear tu cuenta.</span>
    </div>
    <SignUp/>
    {
            animandoModal ? <span className='showmessaner2'>
            {show}
            </span>: <div></div>
    }
    <div className="GoLogin">
    <span className="GoLogin2" onClick={FunctionAtrasIngresar}>Iniciar sesion</span>
    </div>
    </div>
 
    </section>
  )
}
export default Rgistro;
