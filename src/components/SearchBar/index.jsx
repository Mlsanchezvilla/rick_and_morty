import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  
 const [id, setId] = useState("");

 function handleChange(event) {

   setId(event.target.value);  
 }
   return ( 
      <div >

         <div>
         < input style ={{justifyContent:"space-between",display:"grid",backgroundColor:"lightblue", color:"black",padding:"4px",borderRadius:"6px",cursor:"pointer"}}
            type = "search" 
             onChange={handleChange} />
         </div>
         < button style ={{backgroundColor:"violet", color:"black",padding:"4px",borderRadius:"15px",cursor:"pointer"}} onClick={()=> onSearch(id)}>Agregar</button> 
        
      </div>
   );
}
