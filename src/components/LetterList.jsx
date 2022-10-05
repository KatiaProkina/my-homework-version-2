import React from "react";
import Word from "./Word";

const LetterList = ({letters,addResult}) =>{


    return(
    <div>
         {letters.map((letter,index) =>
               <Word addResult ={addResult} letter={letter} key={letter.id}/>
          )}
    </div>
    )
    }

    export default LetterList;