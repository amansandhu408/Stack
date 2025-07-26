// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)\
  let myobj ={
    username:"aman",
    age:20
  }
  let newarr=[1,1,2,3,4]

  return (
  <>
    <h1 className='bg-green-500 text-black p-5 rounded-2xl'>Tailwaind Test</h1>
    <Card channel="chai aur react" someobj={newarr} otherobj={myobj}/>
  </>
  )
}

export default App
