import React, { useState } from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Support from '../../components/support/Support'
import News from '../../components/news/News'
import Feature from '../../components/feature/Feature'
import Search from '../../components/search/Search'
import { useGetProductsQuery } from '../../context/api/productApi'

function Home() {
  const [offset, setOffset] = useState(1)
  let {data} = useGetProductsQuery({limit: 4*offset})
  return (
    <div>
      <Hero/>
      <Products data={data} offset={offset} setOffset={setOffset}/>
      <Banner/>
      <Support/>
      <News/>
      <Feature/>
      <Search/>
    </div>
  )
}

export default Home
