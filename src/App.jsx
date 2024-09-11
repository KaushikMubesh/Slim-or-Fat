import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bmi1 } from './Bmi1'
// import { Bmi } from './Bmi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Bmi /> */}
    <Bmi1 />
    </>
  )
}

export default App