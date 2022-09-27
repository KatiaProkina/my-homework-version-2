import React, { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import LetterList from "./components/LetterList";



function App() {
  const[letters,setLetters] = useState([
    
  ])
  const[value,setValue] = useState('')

  const addLetter = (e) =>{
      e.preventDefault()
      const newLetter = {
        id: Date.now(),
        value
      }
       setLetters([...letters,newLetter])
  }
  // const addResult = ()=>{
  //     value = {body}
  // }

  return (
    <div className="App">
        <Input  type='text'
        value = {value}
        onChange={e => setValue(e.target.value)}
        />
        <Button onClick={addLetter}>Добавить букву</Button>
      
       <LetterList   letters={letters}/>
       <h2 >Результат:  </h2>

    </div>
  );
}

export default App;
