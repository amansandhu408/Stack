import { useState } from 'react';

import './App.css'

function App() {

  let [counter, setCounter ] = useState(15)
  
  
  //let counter= 15

  const Addvalue =()=>{
    counter = counter+1;
    setCounter(counter)

  }

  const RemoveValue =()=>{
    counter= counter -1;
    setCounter(counter)
  }

  
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={Addvalue}>Add Value</button>
    <br />
    <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
