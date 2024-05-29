import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import CartProducts from '../../components/cartProducts/CartProducts'
function Cart() {
const carts = useSelector(s => s.cart.value)
  return (
    <div>
      {
        carts.length 
        ? 
       <CartProducts data={carts}/>
        :
        <Empty/>
      }
    </div>
  )
}

export default Cart
