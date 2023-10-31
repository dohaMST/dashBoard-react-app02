import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

function Header({handleOpening}) {
  return (
    <header className='header'>
      {/* for the sidebar */}
      <div className="menuIcon">
        <BsJustify className='icon sidebarIcon' onClick={handleOpening}/>
      </div>

      <div className="headerLeft">
        <BsSearch className=' searchIcon icon'/>
        <input type="text" placeholder='search ...' />
      </div>
      
      <div className="headerRight">
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
      </div>
    </header>
  )
}

export default Header