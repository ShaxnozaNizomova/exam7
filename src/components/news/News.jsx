import React from 'react'
import './News.css'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'

function News() {
  return (
    <div>
      <h3 className='pro__title'>Latest News</h3>
      <div className='news__container'>
        <div className='news__card'>
            <div>
                <img src={icon1} alt="nikelogo" />
            </div>
            <div>
                <p className='news__text1'>01 Jan, 2015</p>
                <p className='news__text2'>Fashion Industry</p>
                <p className='news__text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className='news__card'>
            <div>
                <img src={icon2} alt="figmalogo" />
            </div>
            <div>
                <p className='news__text1'>01 Jan, 2015</p>
                <p className='news__text2'>Best Design Tools</p>
                <p className='news__text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className='news__card'>
            <div>
                <img src={icon3} alt="kronoslogo" />
            </div>
            <div>
                <p className='news__text1'>01 Jan, 2015</p>
                <p className='news__text2'>HR Community</p>
                <p className='news__text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
