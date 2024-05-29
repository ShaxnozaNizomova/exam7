import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Support from '../../components/support/Support'
import News from '../../components/news/News'
import Feature from '../../components/feature/Feature'
import Search from '../../components/search/Search'
import { useGetProductsQuery } from '../../context/api/productApi'

function Home() {
  let {data} = useGetProductsQuery()
  return (
    <div>
      <Hero/>
      <Products data={data}/>
      <Banner/>
      <Support/>
      <News/>
      <Feature/>
      <Search/>
    </div>
  )
}

export default Home
