import { motion } from 'framer-motion';
import "./SelectFilter.css";
import {UseGlobal,ViewRestaurantes} from "../../index";
const SelectFilter = ({array}) => {
  const {filtroMapas,setFiltroMapas} = UseGlobal();
  const {showMaps2} = ViewRestaurantes();
  const functionChange = (e)=>{
    if(e.target.checked){
      setFiltroMapas(e.target.value);
      showMaps2(e.target.value);
    }
    else{
      setFiltroMapas("")
    }
  };
  return (
    <motion.div 
    className="ConSelectFilter"
    initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
    {
        array.map((data)=>{
            return <div className="dd" key={data.id}>
                    <input type="checkbox" value={data.data} onChange={functionChange}/>
                    <span className="CategoriaItem">{data.data}</span>
                   </div>
        })
    }
    </motion.div>
  )
}

export default SelectFilter
