import { BiLogoWhatsapp } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import {
    AiOutlineHome,
    AiOutlineSetting
  } from "react-icons/ai";
  import { MdOutlineAnalytics } from "react-icons/md";
  import {RiDashboard3Line} from "react-icons/ri"
  import { BiLogOut } from "react-icons/bi";
export const Array = [
    {id:1,
     imagen: <BiHomeAlt/>,
     COD: "/",
     Descp:"Inicio"},
    {id:2,
    imagen: <BiCurrentLocation/>,
    COD: "/Mapa",
    Descp:"Tiendas"},
    {id:3,
    imagen: <BiHeart/>,
    COD: "/Favoritos",
    Descp:"Favoritos"},
    {id:4,
    imagen: <BiBell/>,
    COD: "/Pedidos",
    Descp:"Pedidos"},
    {id:5,
    imagen: <BiLogoWhatsapp/>,
    COD: "/CHAT",
    Descp:"Chat"}
];
export const rutas = [
    {
    id:1,
    tile:"Inicio",
    ruta:'/'},
    {
    id:2,
    tile:"Contactanos",
    ruta:'/Contactanos' 
    },
    {
    id:3,
    tile:"SobreNosotros",
    ruta:'/SobreNosotros'
    },
    {
    id:4,
    tile:"Registro",
    ruta:'/Ingresar'   
    }
];

export const rutas2 = [
  {
    id:1,
    tile:"Perfil",
    ruta:'/Perfil'
  },
  {
    id:2,
    tile:"Dashboard",
    ruta:'/Dashboard'
  },
  {
    id:3,
    tile:"configurar",
    ruta:'/configurar'
  },
  {
    id:4,
    title:"CerrarSesion",
    ruta:'CerrarSesion'
  }
];

export const Referencias = [
    {
        id:1,
        data1:"Recabar Datos:",
        datos2:"Ordenamiento y almacenamiento de los datos. Además de identificación de correlaciones de datos."
    },
    {
        id:2,
        data1:"Transformación De Los Datos En Información",
        datos2:"Identificar las correlaciones de la información. Diseñar el display de la información y agruparla en capas que faciliten el análisis." 
    },
    {
        id:3,
        data1:"Cruce De Capas",
        datos2:"Cálculos de índices e indicadores, corrida de los modelos para hacer visible la información relevante. Con la información relevante identificada conformar las capas de consumo."
    },
    {
        id:4,
        data1:"Presentación De Resultados",
        datos2:"Para la utilización de las capas de consumo y así obtener los beneficios de haber extraído de la información original, las soluciones derivadas de los análisis respectivos, por medio de reportes, dashboards, experiencias, sistemas de información geográficos."
    }
];

export const LinksArray = [
    {
      label: "Perfil",
      icon: <AiOutlineHome />,
      to: "/Perfil",
    },
    {
      label: "Explorar",
      icon: <MdOutlineAnalytics/>,
      to: "/Dashboard",
    }
];

export const SecondarylinksArray = [
    {
      label: "Configuración",
      icon: <AiOutlineSetting />,
      to: "/configurar",
    },
    {
      label: "Cerarr Sesion",
      icon: <BiLogOut />,
      to: "/CerrarSesion",
    },
];

export const arrayGIS = [
  {
    id:1,
    data:"INTRODUCCION"
  },
  {
    id:2,
    data:"CATOLOGO",
  },
  {
    id:3,
    data:"MAPAS, HISTORIAS Y HECHOS"
  },
  {
    id:4,
    data:"PLANIMETRIA Y CATASTRO"
  },
  {
    id:5,
    data:"GESTION AMBIENTAL"
  },
  {
    id:6,
    data:"MAPAS 3D"
  },
  {
    id:7,
    data:"EQUIPAMIENTO Y CATEGORIA"
  },
  {
    id:8,
    data:"SALUD"
  },
  {
    id:9,
    data:"ELECTORAL"
  },
  {
    id:10,
    data:"Todos"
  }
];

export const ArrayOrdenar = [
  {
    id:1,
    data:"Orden Descendiente"
  },
  {
    id:2,
    data:"Orden Ascendente"
  }
];



