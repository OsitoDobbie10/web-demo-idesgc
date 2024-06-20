import { motion } from 'framer-motion';
import "./SelectFilter.css";
const SelectFilter2 = ({array}) => {
  return (
    <motion.div 
    className="ConSelectFilter"
    initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
    {
        array.map((data)=>{
            return <div className="dd2" key={data.id}>
                   <span className="CategoriaItem">{data.data}</span>
                   </div>
        })
    }
    </motion.div>
  )
}

export default SelectFilter2;
