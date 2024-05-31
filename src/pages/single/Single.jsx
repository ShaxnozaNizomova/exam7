import React, { useEffect } from 'react'
import './Single.css'
import { useGetDetailProductQuery } from '../../context/api/productApi'
import { decrementCartQuantity, incrementCartQuantity } from '../../context/cartSlice'
import { addToCart } from '../../context/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import rate from '../../assets/images/rate.svg'
import colors from '../../assets/images/colors.svg'
import share from '../../assets/images/share.svg'
import best from '../../assets/images/best.svg'
import  tabs from '../../assets/images/Tabs.svg'
import Products from '../../components/products/Products'
function Single() {
  const { id } = useParams();
  const { data } = useGetDetailProductQuery(id)
  let dispatch = useDispatch()
  const cart = useSelector(state => state.cart.value); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <>
     <div className='single'>
       <div className='singlepage'>
     <div className='single__box'>
      <div className='single__img'>
        <div className='big__img'>
           <img src={data?.image} alt="" width={375} height={270}/>
        </div>
        <div className='single__imgs'>
          <div>
            <img src={data?.image} alt={data?.title} width={85} height={80}/>
          </div>
          <div>
            <img src={data?.image} alt={data?.title} width={85} height={80}/>
          </div>
          <div>
            <img src={data?.image} alt={data?.title} width={85} height={80}/>
          </div>
          <div>
            <img src={data?.image} alt={data?.title} width={85} height={80}/>
          </div>
        </div>
      </div>
      <div className='single__content'>
          <p className='single__title'>{data?.title}</p>
          <img src={rate} alt="rating" />
          <div className='single__price'><p className='card__price'>${data?.price}</p>  <p className='banner__dis'><span>$534,33</span> 24% Off</p></div>
          <p className='single__text'> Availability:  <span>In Stock</span></p>
          <p className='single__text'> Category:  <span>{data?.category}</span></p>
          <p className='single__text'> Free Shipping</p>
          <p className='single__text'> Select Color:  <span> <img src={colors} alt="colors" /></span></p>
          <div className='cart__single'> 
          <div className='qty'>
  <div>
    <button onClick={() => dispatch(incrementCartQuantity(data?.id))} className='cart__btn'>+</button>
  </div>
  <div>
    <p className='cart__title'>{data?.quantity} 1</p>
  </div>
  <div>
    <button disabled={data?.quantity <= 1} onClick={() => dispatch(decrementCartQuantity(data?.id))} className='cart__btn'>-</button>
  </div>
          </div>
          <div>
          <button className='add__btn' onClick={() => handleAddToCart(data)}>
            {isProductInCart(data?.id) ? 'Added to cart' : 'Add to cart'}
             </button>
          </div>
          </div>
          <img className='share' src={share} alt="share" />
      </div>
     </div>
     <div className='bestselling'>
      <h4 className='best__title'>Best Seller</h4>
    <div className='best__card'>
     <img src={data?.image} alt={data?.title} width={250} height={229}/>
     <img src={rate} alt="rating" className='rating__best' />
     <p className='banner__dis'><span>$534,33</span> 24% Off</p>
    </div>
     </div>
    </div>
    <div className='tabs'>
    <img src={tabs} alt="tabs" width={924}/>
   </div>
     </div>
     <h2 className='pro__title'>Related Products</h2>
     <Products/>
    </>

  )
}

export default Single
