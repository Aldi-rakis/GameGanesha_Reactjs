import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Backgorund from './components/Background'
import Menu from './components/Menu'

import MusicToggleButton from './components/Musik'

//import routes
import Routes from './routes/routes';

function App() {
  const [count, setCount] = useState(0)

  return (
   

    <>
    
      <Routes />
      <MusicToggleButton />
    </>
  )
}

export default App
