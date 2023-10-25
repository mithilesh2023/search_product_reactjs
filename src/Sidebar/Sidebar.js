import React from 'react'
import './sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
import {BsCartPlus} from 'react-icons/bs'
const sidebar = () => {
  return (
      <section className='sidebar'>
          <div className="logo-container">
              <h1><BsCartPlus/></h1>
        </div>
          <Category />
          <Price />
          <Color/>
    </section>
  )
}

export default sidebar