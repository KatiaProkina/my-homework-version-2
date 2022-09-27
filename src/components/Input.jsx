import React from "react";


const Input = ( ...props) =>{
    return(
    <div>
        <label>
        Поле ввода: 
        
        <input {...props}/>  
        </label>
    </div>
    )
    }

    export default Input;