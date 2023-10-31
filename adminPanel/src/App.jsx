import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

import { OpenContext } from './context/OpenContext';



function App() {

  const [isOpen, setIsOpen] = useState(false)
  const handleOpening =()=>{
    setIsOpen(!isOpen)
  }
  console.log(isOpen)
  return (
    
      <div className="gridContainer">
        <OpenContext.Provider value={isOpen}>
          <Header handleOpening={handleOpening}/>
          <Sidebar handleOpening={handleOpening}/>
          <Home/>
        </OpenContext.Provider>
      </div>
    
  )
}

export default App
