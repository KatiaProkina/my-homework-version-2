import React from "react";
import Word from "./Word";

const LetterList = ({letters}) =>{
    return(
    <div>
         {letters.map((letter,index) =>
               <Word number = {index+1} letter={letter} key={letter.id}/>
          )}
    </div>
    )
    }

    export default LetterList;