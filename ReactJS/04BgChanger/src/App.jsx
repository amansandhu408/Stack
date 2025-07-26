import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button 
          onClick={()=> setColor("red")} 
          className="outline-none rounded px-2"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={()=> setColor("blue")} 
          className="outline-none rounded px-2"
          style={{backgroundColor: "blue"}}>Blue</button>
          <button 
          onClick={()=> setColor("green")} 
          className="outline-none rounded px-2"
          style={{backgroundColor: "green"}}>Green</button>
          <button 
          onClick={()=> setColor("yellow")} 
          className="outline-none rounded px-2"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button 
          onClick={()=> setColor("lavender")} 
          className="outline-none rounded px-2"
          style={{backgroundColor: "lavender" }}>Lavender</button>
          <button 
          onClick={()=> setColor("black")} 
          className="outline-none rounded px-2 text-white"
          style={{backgroundColor: "black" }}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
