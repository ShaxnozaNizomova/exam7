import React, { useState } from 'react'
import './Checkout.css'
import close from '../../assets/images/close.svg'
import { removeAllItemsFromCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'
const BOT_TOKEN = "6324313326:AAHPAj1KWL-x8Hy3TdBrx9ztDJHc_tsPnnQ"
const CHAT_ID = "-4146124100"
let initialState = {
  fname:"",
  email:"",
  massage:"",
  lname:"",
  address: "",
  phone: ""
}
function Checkout({ products, closeModal }) {
  let [data, setData] = useState(initialState)
  let dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
   
    let my_text = ""
    my_text +=  `First Name:  ${data.fname}%0A`
    my_text += `Last Name:  ${data.lname}%0A`
    my_text += `Address:  ${data.address}%0A`
    my_text += `Email:  ${data.email}%0A`
    my_text += `Payment method:  ${data.massage}%0A`
    my_text +=`Phone Number:  ${data.phone}%0A%0A`
    e.preventDefault()
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${my_text}&parse_mode=html`;
    let api =  new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    dispatch(removeAllItemsFromCart());
    closeModal(false);
    window.scrollTo(0, 0);
    alert("Your order has been accepted");
  };
  return (
    <div>
      <div className='checkout__modal'>
        <div className='checkout__items'>
          <div className='check__div'>
          <h2 className='checkout__title'>Make Payment</h2>
         <button className='checkout__btn' onClick={()=> closeModal(false)}> <img src={close} alt="" /></button>
          </div>
           <form action="">
           <div className='form__check'>
           <div>
              <input className='check__input' value={data.fname}
               required
               onChange={e => setData(p => ({...p, fname: e.target.value}))} 
               type="text" placeholder='First Name'/>
               <input className='check__input' value={data.email}  required
               onChange={e => setData(p => ({...p, email: e.target.value}))} 
               type="email" placeholder='Email Address'/>
               <div className='paycheck'>
               <div className='pay'>
               <label htmlFor="checkbox1">Credit card or Debit</label>
               <input className='check__input' value={data.massage}  required
               onChange={e => setData(p => ({...p, massage: e.target.value}))} 
               name='checkbox1'
               type="checkbox"/>
               </div>
               <div  className='pay'>
               <label htmlFor="checkbox2">Paypal</label>
               <input className='check__input' value={data.massage}  required
               onChange={e => setData(p => ({...p, massage: e.target.value}))} 
               name='checkbox2'
               type="checkbox"/>
               </div>
               <div  className='pay'>
               <label htmlFor="checkbox3">Bank Transfer</label>
               <input className='check__input' value={data.massage}  required
               onChange={e => setData(p => ({...p, massage: e.target.value}))}
               name='checkbox3' 
               type="checkbox"/>
               </div>
               </div>
            </div> 
            <div>
            <input className='check__input' value={data.lname}
               onChange={e => setData(p => ({...p, lname: e.target.value}))}  required
               type="text" placeholder='Last Name'/>
               <input className='check__input1' value={data.address}
               onChange={e => setData(p => ({...p, address: e.target.value}))}  required
               type="text" placeholder='Address'/>
               <input className='check__input' value={data.phone}
               onChange={e => setData(p => ({...p, phone: e.target.value}))}  required
               type="number" placeholder='Mobile Phone'/>
            </div>
           </div>
            <div className='check__boxbtn'>
            <button className='check__btn' onClick={handleSubmit}>Go to Payment</button>
            </div>
           </form>
        </div>
      </div>
    </div>
  )
} 

export default Checkout
