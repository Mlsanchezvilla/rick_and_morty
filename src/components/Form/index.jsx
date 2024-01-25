import { useState } from "react";
import styles from "./Index.module.css"
import validation from "../../Utils/validation";



const {
    container,
    form,
    warning,
    } =styles;

    
  
 export default function Form ({login}) {

    const [userData, setUserData]=useState({
        username:"",
        password:""
    });

    const [errors,setErrors] = useState ({
        username:"",
        password:""
    });
          
    
    const handleChange = (e)=>{
            setErrors(
                validation ({
                    ...userData,
                        [e.target.name] : e.target.value
                })
    );

        setUserData({
            ...userData,
                [e.target.name] : e.target.value
    }); 
    
    };
         return (
         <div className ={container}>
            <form className={form} onSubmit={()=>login(userData)}>
                <label htmlFor="e-mail">E-mail</label> 
                    <input type="email" name= "email" value= {userData.username} onChange={handleChange} className={errors.username && warning }/>
                    
                
                {/* para poner el mensaje de error */}

                 { errors.username ? <span className={warning}>{errors.username}</span>: undefined}

                <hr style ={{borderStyle:"none"}} /> 

                <label htmlFor="password">Password</label>
                    <input type="text" name= "password" value = {userData.password} onChange={handleChange} className={errors.password && warning}/>

                { errors.password ? <span className={warning}>{errors.password}</span>: undefined}

                <hr style ={{borderStyle:"none"}} />


                    <button>submit</button>
 
    </form>
</div> 
    )
}

