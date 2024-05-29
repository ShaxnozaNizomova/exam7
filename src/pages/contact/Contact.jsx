import React, { useState } from 'react'
import './Contact.css'
import Search from '../../components/search/Search'
const BOT_TOKEN = "6324313326:AAHPAj1KWL-x8Hy3TdBrx9ztDJHc_tsPnnQ"
const CHAT_ID = "-4146124100"
let initialState = {
  fname:"",
  email:"",
  massage:"",
}
function Contact() {
  let [data, setData] = useState(initialState)
  const handleSubmit = e => {
      e.preventDefault()
      let my_text = ""
      my_text += data.fname
      my_text += data.email
      my_text += data.massage
      let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${my_text}&parse_mode=html`;
      let api =  new XMLHttpRequest();

      api.open("GET", url, true)
      api.send()

      alert("Sending massage was succesfull")
  }
  return (
    <div className='contact'>
     <div className='contact__box'>
      <div className='contact__left'>
      <div>
      <p className='contact__title'>get in touch</p>
      <p className='contact__text'>contact@e-comm.ng</p>
      <p className='contact__text'>+234 4556 6665 34</p>
      <p className='contact__text3'>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
      </div>
      </div>
      <div>
      <form onSubmit={handleSubmit} action="">
            <input className='contact__input1' 
            value={data.fname} 
            onChange={e => setData(p => ({...p, fname: e.target.value}))} 
            type="text" 
            placeholder='Enter Your Full Name' />
            <input className='contact__input' 
            value={data.email} 
            onChange={e => setData(p => ({...p, email: e.target.value}))} 
            type="email" 
            placeholder='Enter Your Email' />
            <input className='input' 
            value={data.massage} 
            onChange={e => setData(p => ({...p, massage: e.target.value}))} 
             type="textarea" 
             placeholder='Type Your Massage'/>
             <button className='check__btn'>Send</button>
        </form>
      </div>
     </div>

    <Search/>
    </div>
  )
}

export default Contact
