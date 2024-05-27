import React from 'react'
import './Feature.css'
import sneakers from '../../assets/images/sneakers.svg'
import rate from '../../assets/images/rate.svg'
function Feature() {
  return (
    <div>
      <h2 className='pro__title'>Featured Products</h2>
      <div className='news__container'>
        <div className='news__card'>
            <div><img src={sneakers} alt="sneakers" /></div>
            <div>
                <p className='fet__text1'>Blue Swade Nike Sneakers</p>
                <img className='img' src={rate} alt="rating" />
                <p className='banner__dis'>$499 <span>$599</span></p>
            </div>
        </div>
        <div className='news__card'>
            <div><img src={sneakers} alt="sneakers" /></div>
            <div>
                <p className='fet__text1'>Blue Swade Nike Sneakers</p>
                <img className='img' src={rate} alt="rating" />
                <p className='banner__dis'>$499 <span>$599</span></p>
            </div>
        </div>
        <div className='news__card'>
            <div><img src={sneakers} alt="sneakers" /></div>
            <div>
                <p className='fet__text1'>Blue Swade Nike Sneakers</p>
                <img className='img' src={rate} alt="rating" />
                <p className='banner__dis'>$499 <span>$599</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
