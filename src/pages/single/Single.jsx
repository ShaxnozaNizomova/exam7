import React from 'react'
import './Single.css'
import { useGetDetailProductQuery } from '../../context/api/productApi'
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
  return (
    <>
     <div className='single'>
       <div className='singlepage'>
     <div className='single__box'>
      <div className='single__img'>
        <div>
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
          <img className='share' src={share} alt="share" />
      </div>
     </div>
     <div className='bestselling'>
     <img src={best} alt="" width={289}/>
     </div>
    </div>
    <div>
    <img src={tabs} alt="tabs" width={924}/>
   </div>
     </div>
     <h2 className='pro__title'>Related Products</h2>
     <Products/>
    </>

  )
}

export default Single
