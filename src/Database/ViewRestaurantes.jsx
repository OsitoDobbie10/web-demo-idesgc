import {create} from "zustand";
import {MostrarClientes,
        MostrarFavsDBD,
        MostrarIDEDBB,
        FiltrosMapas
        } from "../index";
export const ViewRestaurantes = create((set,get)=>({
    usuario:[],
    cuenta:[],
    idUsuario: 0,
    ArregloFavsMapas:[],
    ArregloMapas:[],
    showusuario: async()=>{
     const show = await MostrarClientes();
     set({usuario:show});
     if(show){
        set({idUsuario:show.id});
        return show
     }
     else{
        {key:"Salio mal algo"}
     }
    },
    showFavsMaps: async()=>{
      const res = await MostrarFavsDBD();
      set({ArregloFavsMapas:res});
      return res;
    },
    showMaps: async()=>{
      const res = await MostrarIDEDBB();
      set({ArregloMapas:res});
      return res;  
    },
    showMaps2: async(Categoria)=>{
      const {ArregloMapas} = get();
      if(Categoria === "Todos" ){
        const res = await MostrarIDEDBB();
        set({ArregloMapas:res});
        return res;
      }
      else{
        const res2 = await FiltrosMapas(Categoria);
        set({ArregloMapas:res2});
        return res2;
      }
    }
}));