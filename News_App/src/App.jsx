import { useState } from 'react'
import Newsapp from './Conponents/NewsApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Newsapp/>
  )
}

export default App
