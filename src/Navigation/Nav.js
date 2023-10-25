import React from 'react'
import './nav.css'
import { AiFillHeart } from 'react-icons/ai'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
const Nav = () => {
  return (
      <nav>
          <div className="nav-container">
              <input type="text" className='search-input' placeholder='Enter your search shoes' />
          </div>
          <div className="profile-container">
              <a href="#">
                  <AiFillHeart className='nav-icons' />
              </a>
              <a href="#">
                  <AiOutlineShoppingCart className='nav-icons' />
              </a>
              <a href="#">
                  <AiOutlineUserAdd className='nav-icons' />
              </a>
          </div>
    </nav>
  )
}

export default Nav