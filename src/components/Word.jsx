import React from "react";
import'./styles/Word.css'


const Word = (props) =>{
    return(
    <div>
        <div className="word" onClick = {()=>{props.addResult(props.letter.value)} }>{props.letter.value}</div>
    </div>
    )

    }

    export default Word;