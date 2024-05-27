import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import profile from '../../assets/images/profile.svg'
import heart from '../../assets/images/heart1.svg'
import cart from '../../assets/images/Cart.svg'
import './TopNavbar.css'
function TopNavbar() {
  return (
   <div className='topnavbar'>
     <div className='topnavbar__items'>
      <div>
         <select className='topnavbar__select' name="" id="">
            <option  value="Eng">EN</option>
            <option value="Uzb">UZ</option>
            <option value="Ru">RU</option>
         </select>
         <select className='topnavbar__select' name="" id="">
            <option value="USD">USD</option>
            <option value="USD">USD</option>
            <option value="USD">USD</option>
         </select>
      </div>
      <div>
         <ul className='topnavbar__menu'>
            <li><NavLink to={"/login"}>
                <img src={profile} alt="login" />
            </NavLink></li>
            <li><NavLink to={"/wishlist"}>
                <img src={heart} alt="like" width={25} height={21}/>
            </NavLink></li>
            <li><NavLink to={"/cart"}>
                <img src={cart} alt="cart" />
            </NavLink></li>
            <li>
                <NavLink to={"/admin"}>
                    Admin
                </NavLink>
            </li>
         </ul>
      </div>
    </div>
   </div>
  )
}

export default TopNavbar
