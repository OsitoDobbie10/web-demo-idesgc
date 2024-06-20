import {supabase} from "../index";
import Swal from "sweetalert2";
export const MostrarFavsDBD = async()=>{
    try {
     const {data,error} = await supabase.from("FavsCatalogoIDE").select();
     if(data){
         return data;
     }
 } catch (error) {
     alert(error.error_description || error.message + "FavsCatalogoIDE")
 }};

 export const InsertarFavsDBD = async(p)=>{
    try {
        const {data,error} =  await supabase.from("FavsCatalogoIDE").insert(p).select();
        if(error){
            Swal.fire({
              icon: "error",
              title: "Fallo...",
              text:"No se pudo agregar a tus favoritos" + p.idUsuario,
              timer: 5500,
              footer:`<a href=""><a/>`
            });
        }
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Agregado Favorito",
                showConfirmButton: false,
                timer: 1500,
              });
          }
       } catch (error) {
        alert(error.error_description || error.message + "insertar Favorito")
       }
};
export const BorrarFavoritoBDB = async(p)=>{
    try {
        const {error} = await supabase.from("FavsCatalogoIDE").delete().eq("idUsuario",p.idUsuario).eq("id",p.id);
        if(error){
            alert("error al eliminar",error);
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Elemento Borrado",
                showConfirmButton: false,
                timer: 2000
              });
        }

    } catch (error) {
        alert(error.error_description || error.message + "eliminar direccion")   
    }
}
export const MostrarIDEDBB = async()=>{
    try {
     const {data,error} = await supabase.from("CatalogosIDE").select();
     if(data){
         return data;
     }
 } catch (error) {
     alert(error.error_description || error.message + "CatalogosIDE")
 }};

 export const FiltrosMapas = async(Categoria)=>{
    try {
        const {data,error} = await supabase.from("CatalogosIDE").select().eq("Categoria",Categoria);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "CatalogosIDE");
    }
};

export const OrdenarMAPAS = async()=>{
    try {
        const { data, error } = await supabase.from('CatalogosIDE').select().order('id', { ascending: false });
        if(data){
            return data;
        }
    } catch (error) {
        alert(error.error_description || error.message + "CatalogosIDE")
    }
};

export const DesordenarMAPAS = async()=>{
    try {
        const { data, error } = await supabase.from('CatalogosIDE').select().order('id', { ascending: false });
        if(data){
            return data;
        }
    } catch (error) {
        alert(error.error_description || error.message + "CatalogosIDE")
    }
};


