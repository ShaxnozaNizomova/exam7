import React, { useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import rate from '../../assets/images/rate.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../context/cartSlice';
import Skeleton from '../skeleton/Skeleton'
import cart from '../../assets/images/Cart.svg'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleLike } from '../../context/wishlistSlice'
import { useGetProductsQuery } from '../../context/api/productApi';
function Products({data, setOffset}) {
  let wishlist = useSelector(state => state.wishlist.value)
  const dispatch = useDispatch()
  let products = data?.map((el) => (
    <div key={el.id} className='card'>
       <img src={el.image} alt={el.title} width={250} height={200} />
       <div className='btns'>
       <button className='like__btn' onClick={()=> dispatch(toggleLike(el))}>
        {
          wishlist?.some(item => item.id === el.id) ? 
          <FaHeart style={{color:"red"}}/> 
          :
          <FaRegHeart/>
        }
      </button>
      <button className='like__btn' onClick={()=> dispatch(addToCart(el))}>
          <img src={cart} alt="cart"/>
      </button>
       </div>
       <Link to={`/single/${el.id}`}><p className='card__title'>{el.title}</p></Link>
        <img src={rate} alt="" />
        <p className='card__price'> ${el.price} </p>
        <p className='banner__dis'><span>$534,33</span> 24% Off</p>
      </div>
  ))
   if(!products){
    return <Skeleton count={8}/>

   }
  return (
      <div>
         <div className='products'>
         {products}
         </div>
           <div className='btn__box'>
            <button onClick={()=> setOffset(p => p + 1)}>Load more</button>
           </div>
      </div>
  )
}

export default Products
