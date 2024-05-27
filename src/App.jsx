import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'
import TopNavbar from './components/topnavbar/TopNavbar'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single/:id' element={<Single/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
