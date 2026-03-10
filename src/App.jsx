import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewCard from './components/viewProducts'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
    <h1>Products will be displayed here</h1>
    <ViewCard />
  </>
  )
}

export default App
