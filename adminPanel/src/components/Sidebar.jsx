import React, { useContext, useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

  import { OpenContext } from '../context/OpenContext';

function Sidebar({handleOpening}) {

  const isOpen = useContext(OpenContext)

  return (
    <aside className={`sidebar ${isOpen ? 'opened' : null}`}>
      <div className="sidebarTitle">
        <div className="sidebarBrand">
          <BsCart3 className='iconHeader'/> Shop
        </div>
        <span className="icon closeIcon" onClick={handleOpening}>X</span>
      </div>

      
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <a href="">
            <BsGrid1X2Fill className='icon'/> dashboard
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsFillArchiveFill className='icon'/> products
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> categories
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsPeopleFill className='icon'/> customers
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsListCheck className='icon'/> inventory
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsMenuButtonWideFill className='icon'/> reports
          </a>
        </li>
        <li className="sidebarListItem">
          <a href="">
            <BsFillGearFill className='icon'/> settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar