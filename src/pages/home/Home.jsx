import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Support from '../../components/support/Support'
import News from '../../components/news/News'
import Feature from '../../components/feature/Feature'
import Search from '../../components/search/Search'

function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <Banner/>
      <Support/>
      <News/>
      <Feature/>
      <Search/>
    </div>
  )
}

export default Home
