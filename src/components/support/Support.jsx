import React from 'react'
import './Support.css'
import shipping from '../../assets/images/shipping.svg'
import refund from '../../assets/images/refund.svg'
import support from '../../assets/images/support.svg'
function Support() {
  return (
    <div className='support'>
      <div className='sup__card'>
        <img src={shipping} alt="shipping" height={88}/>
        <h4 className='sup__title'>Free Shipping</h4>
        <p className='sup__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className='sup__card'>
        <img src={refund} alt="refund" height={88} />
        <h4 className='sup__title'>100% Refund</h4>
        <p className='sup__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className='sup__card'>
        <img src={support} alt="support" height={88}/>
        <h4 className='sup__title'>Support 24/7</h4>
        <p className='sup__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  )
}

export default Support
