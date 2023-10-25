import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
       
      <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test'/>
          <span className='checkmark'></span>All
        </label>

        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test'/>
          <span className='checkmark'></span>Sneakers
        </label>

        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test'/>
          <span className='checkmark'></span>Flats
        </label>

        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test'/>
          <span className='checkmark'></span>Sandals
        </label>

        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test'/>
          <span className='checkmark'></span>Heals
        </label>

      </div>
    </div>
  )
}

export default Category