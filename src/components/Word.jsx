import React from "react";
import'./styles/Word.css'

const Word = (props) =>{
    return(
    <div>
        <div className="word">{props.number}.{props.letter.value}</div>
    </div>
    )
    }

    export default Word;