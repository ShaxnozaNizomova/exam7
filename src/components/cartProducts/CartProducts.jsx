import React, { useState } from 'react'
import './CartProducts.css'
import del from '../../assets/images/del.svg'
import Checkout from '../checkout/Checkout'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart , decrementCartQuantity, incrementCartQuantity, } from '../../context/cartSlice'
function CartProducts({data}) {
   let dispatch = useDispatch()
   let cart = useSelector(state => state.cart.value)
   let totalPrice = data?.reduce((sum,item) => sum + (item.quantity * item.price), 0)
   const [modal, setModal] = useState(false)
    let cartProducts = data?.map(item => (
        <div className='cart__items' key={item.id}>
           <div>
            <button onClick={()=> dispatch(removeItemFromCart(item))} className='del__btn'>
              <img src={del} alt="delete" />
            </button>
           </div>
           <div>
            <img src={item.image} alt={item.title} width={130} height={90}/>
           </div>
          <div className='cart__infos'>
          <div>
            <p className='cart__title1'>{item.title}</p>
           </div>
           <div>
            <p className='cart__title'>{ item.quantity * item.price}</p>
           </div>
           <div className='qty'>
            <div>
                <button  onClick={()=> dispatch(incrementCartQuantity(item.id))} className='cart__btn'>+</button>
            </div>
            <div>
                <p className='cart__title'>{item.quantity}</p>
            </div>
            <div>
                <button disabled={item.quantity <= 1}  onClick={()=> dispatch(decrementCartQuantity(item.id))} className='cart__btn'>-</button>
            </div>
           </div>
           <div>
            <p className='cart__title'>${item.price}</p>
           </div>
          </div>
        </div>
    ) )
  return (
    <div>
      <div className='cart__items'>
      <p className='cart__menu1'>Product</p>
      <p className='cart__menu'>Price</p>
      <p className='cart__menu'>Quantity</p>
      <p className='cart__menu'>Unit Price</p>
      </div>
      {cartProducts}
      <div className='cart__contents'>
        <div className='voucher'>
          <input className='cart__input' type="text" placeholder='Voucher Code'/>
          <button className='search__btn'>Redeem</button>
        </div>
        <div className='card__total'>
           <div className='divs'>
            <p className='cart__titles'>Sub Total</p>
            <p className='cart__titles'>$998</p>
           </div>
           <div className='divs'>
           <p className='cart__titles'>Shipping Fee</p>
            <p className='cart__titles'>$20</p>
           </div>
           <div className='divs'>
           <p className='cart__titles'>Coupon</p>
            <p className='cart__titles'>No</p>
           </div>
           <div className='divs'>
           <p className='cart__total'>Total</p>
            <p className='cart__total'>$ {totalPrice}</p>
           </div>
           <button onClick={() => setModal(true)} className='check__btn'>
            Checkout
           </button>
           <div>
           {modal ? <Checkout products={cart} closeModal={setModal} /> : <></>}
           </div>
        </div>
      </div>
    </div>
  )
}

export default CartProducts
