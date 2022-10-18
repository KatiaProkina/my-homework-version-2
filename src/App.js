import React, { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import LetterList from "./components/LetterList";




function App() {
  const[letters,setLetters] = useState([
    
  ])
  const[value,setValue] = useState('')

  const [result, setResult] = useState('')

  // const addLetter = (e) =>{
  //     e.preventDefault()
  //     if(value.length<=letters.length){
  //        return;
  //     }
      
  //     const newLetter = {
  //       id: Date.now(),
  //       value: value[letters.length]
  //     }
     
  //      setLetters([...letters,newLetter])
  // }

    const formLetters = (str) =>{
      let masStr = str.split('')
      let masObjStr= masStr.map((item,index)=>{
        return{
          id: Date.now()+index+1,
          value: item
      }
    
      })
      setLetters(masObjStr)
      console.log(masObjStr)
      
    }

    const onChange = (e)=>{
        setValue(e.target.value)
        formLetters(e.target.value)
        
    }
  
  const addResult = (word)=>{
      if(result.length == letters.length){
        return;
      }
      setResult(result+word)

  }

  return (
    <div className="App">
        <Input  type='text'
        value = {value}
        onChange={onChange}
        />
        {/* <Button onClick={addLetter}>Добавить букву</Button> */}
      
       <LetterList addResult={addResult} letters={letters}/>
       <h2 >Результат: {result} </h2>

    </div>
  );
}

export default App;
