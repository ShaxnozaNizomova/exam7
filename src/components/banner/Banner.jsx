import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.svg'
function Banner() {
  return (
    <div className='banner'>
      <div className='banner__items'>
        <div>
            <p className='title'>Adidas Men Running Sneakers</p>
            <p className='banner__text'>Performance and design. Taken right to the edge.</p>
            <button className='banner__btn'>Shop Now</button>
        </div> 
        <div>
            <img src={banner} alt="banner" width={600} height={490}/>
        </div>
      </div>
    </div>
  )
}

export default Banner
