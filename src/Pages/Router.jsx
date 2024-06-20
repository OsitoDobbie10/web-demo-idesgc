import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom";
import {Layout1,Home,Contactanos,SobreNosotros,Rgistro,IngresarPage,ErrosRegistes,
        Layaout3,Perfil,Dashboard,Configurar,CerrarSesion} from "../index";
const Router = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout1/>,
            children:[
                {
                    index:true,
                    element:<Home/>

                },
                {
                    path:"/Contactanos",
                    element:<Contactanos/>
                },
                {
                    path:"/SobreNosotros",
                    element:<SobreNosotros/>
                }
            ]
        },
        {
            path:"/Registro",
            element:<Rgistro/>,
            errorElement: <Navigate to={'/'}/>
        },
        {
            path:"/Ingresar",
            element:<IngresarPage/>,
            errorElement: <Navigate to={'/'}/>
        },
        {
            path:"/ErrorSinup",
            element:<ErrosRegistes/>,
            errorElement: <Navigate to={'/'}/>
        },
        {
            path:"/Perfil",
            element:<Layaout3/>,
            children:[
              {
                index:true,
                element:<Perfil/>
              }
            ]
        },
        {
            path:"/Dashboard",
            element:<Layaout3/>,
            children:[
            {
              index:true,
              element:<Dashboard/>
            }
            ]
        },
        {
            path:"/configurar",
            element:<Layaout3/>,
            children:[
            {
              index:true,
              element:<Configurar/>
            }
            ]
        },
        {
            path:"/CerrarSesion",
            element:<Layaout3/>,
            children:[
            {
              index:true,
              element:<CerrarSesion/>
            }
            ]
          }

    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default Router
