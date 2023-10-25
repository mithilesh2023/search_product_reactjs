import React from 'react'
import './products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
const Products = () => {
    return (
        <>
            <section className='card-container'>
                <section className='card'>
                    <img src="https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg" alt="shoe" className='card-img' />

                    <div className="card-details">
                        <h3 className='card-title'>Shoe</h3>
                        <section className='card-reviews'>
                            <AiFillStar className='rating-start' />
                            <AiFillStar className='rating-start' />
                            <AiFillStar className='rating-start' />
                            <AiFillStar className='rating-start' />
                            <span className='total-reviews'>4</span>
                        </section>
                        <section className='card-price'>
                            <div className="price">
                                <del>$300</del>200
                            </div>
                            <div className="bag">
                                <BsFillBagCheckFill className='bag-icon' />
                            </div>
                        </section>
                    </div>

                </section>
                

            </section>
        </>
    )
}

export default Products