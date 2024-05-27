import React, { useState } from 'react'
import './Products.css'
import { useGetProductsQuery} from '../../context/api/productApi'
import { Link } from 'react-router-dom'
import rate from '../../assets/images/rate.svg'
import heart from '../../assets/images/heart1.svg'
import heart2 from '../../assets/images/heart2.svg'
import cart from '../../assets/images/Cart.svg'
function Products() {
  let {data} = useGetProductsQuery()
  const [count, setCount] = useState(1)

  let products = data?.map((el) => (
    <div key={el.id} className='card'>
       <Link to={`/single/${el.id}`}><img src={el.image} alt={el.title} width={250} height={200} /></Link>
       <div className='btns'>
        <img src={heart} alt="like" width={23}/>
        <img src={cart} alt="cart"/>
       </div>
        <p className='card__title'>{el.title}</p>
        <img src={rate} alt="" />
        <p className='card__price'> ${el.price} </p>
        <p className='banner__dis'><span>$534,33</span> 24% Off</p>
      </div>
  ))
  return (
      <div>
         <div className='products'>
         {products}
         </div>
           <div className='btn__box'>
            <button>Load more</button>
           </div>
      </div>
  )
}

export default Products
