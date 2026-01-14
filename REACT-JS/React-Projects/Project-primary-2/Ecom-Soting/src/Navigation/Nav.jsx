import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Nav.css"

function Nav({handleInoutChange, query}) {
  return (
  <nav>
    <div className='nav-container'>
      <input onChange={handleInoutChange} type="text" value={query} className='search-input' placeholder='Shoes name' />
    </div>

    <div className='profile-container'>
      <a href="#">
        <FiHeart className='nav-icons'/>
      </a>
      
      <a href="#">
        <AiOutlineShoppingCart className='nav-icons'/>
      </a>

      <a href="#">
        <AiOutlineUserAdd className='nav-icons'/>
      </a>
    </div>
  </nav>
  )
}

export default Nav