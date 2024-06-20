import {LinksDevice,rutas} from "../../index";
//import IMGSIG from "../../Assets/IDE SGC.png";
import "./HeaderMobile.css";
const HeaderMobile = () => {
  return (
  <>
  <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-info text-white font-weight-bold">
  <LinksDevice rutas={rutas}/>
  </div>
  </div>
  <nav className="navbar navbar-info bg-info">
  <div className="container-fluid">
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <span className="font-weight-bold text-white">IDE SGC</span>
  </div>
  </nav>
  </>
  )
}

export default HeaderMobile;
