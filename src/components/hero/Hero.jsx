import React from 'react'
import './Hero.css'
import img1 from '../../assets/images/img1.png'
function Hero() {
  return (
    <div>
      <div className='hero'>
         <div className='hero__items'>
            <h1 className='hero__title'>Super Flash Sale <br /> 50% Off</h1>
         </div>
      </div>
      <div className='hero__banner'> 
            <div className='banner__card'>
              <p className='banner__title'>FS - QUILTED MAXI CROSS</p>
              <div className='banner__ps'>
                <p className='banner__dis'><span>$534,33</span> 24% Off</p>
                <p className='banner__price'>$299,43</p>
              </div>
            </div>
            <div className='banner__card2'>
            <p className='banner__title'>FS - Nike Air Max 270 React...</p>
              <div  className='banner__ps'>
                <p className='banner__dis'><span>$534,33</span> 24% Off</p>
                <p className='banner__price'>$299,43</p>
              </div>
            </div>
            <div className='banner__card3'> 
            <p className='banner__title'>FS - Nike Air Max 270 React...</p>
              <div className='banner__ps'>
                <p className='banner__dis'><span>$534,33</span> 24% Off</p>
                <p className='banner__price'>$299,43</p>
              </div>
            </div>
         </div>
      <div className='pro__categories'>
      <h2 className='pro__title'>Best Seller</h2>
      <div className='categories'>
        <p className='category'>All</p>
        <p className='category'>Bags</p>
        <p className='category'>Sneakers</p>
        <p className='category'>Belt</p>
        <p className='category'>Sunglasses</p>
      </div>
      </div>
    </div>
  )
}

export default Hero
