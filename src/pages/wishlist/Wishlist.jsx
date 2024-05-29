import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'


const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist.value)

  return (
    <div>
      <h2 className='pro__title'>Wishlist</h2>
      {
        wishlist.length 
        ? 
        <Products data={wishlist}/>
        :
        <Empty/>
      }
    </div>
  )
}

export default Wishlist