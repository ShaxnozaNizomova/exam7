import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import footer from '../../assets/images/footer.svg'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__card'>
            <img className='logo' src={logo} alt="logo"/>
            <p className='footer__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
        </div>
        <div className='footer__card'>
            <p className='footer__title'>Follow us</p>
            <p className='footer__text'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        </div>
        <div className='footer__card'>
            <p className='footer__title'>Contact Us</p>
            <p className='footer__text'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>
      </div>
      <div className='footer__content'>
         <div className='footer__card'>
         <p className='footer__title'>Information</p>
         <p className='footer__text'>About Us</p>
         <p className='footer__text'>Information</p>
         <p className='footer__text'>Privacy & Policy</p>
         <p className='footer__text'>Terms & Condition</p>
         </div>
         <div className='footer__card'>
         <p className='footer__title'>Service</p>
         <p className='footer__text'>About Us</p>
         <p className='footer__text'>Information</p>
         <p className='footer__text'>Privacy & Policy</p>
         <p className='footer__text'>Terms & Condition</p>
         </div>
         <div className='footer__card'>
         <p className='footer__title'>My Account</p>
         <p className='footer__text'>About Us</p>
         <p className='footer__text'>Information</p>
         <p className='footer__text'>Privacy & Policy</p>
         <p className='footer__text'>Terms & Condition</p>
         </div>
         <div className='footer__card'>
         <p className='footer__title'>Our Offers</p>
         <p className='footer__text'>About Us</p>
         <p className='footer__text'>Information</p>
         <p className='footer__text'>Privacy & Policy</p>
         <p className='footer__text'>Terms & Condition</p>
         </div>
      </div>
      <div className='footer__content'>
        <img className='footer__img' src={footer} alt="footer" />
      </div>
    </div>
  )
}

export default Footer
