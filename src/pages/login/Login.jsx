import React, { useState } from 'react'
import { usePostSignInMutation } from '../../context/api/usersApi'
import './Login.css'
import { useNavigate } from 'react-router'
function Login() {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  let [signUp, {data, isSuccess, isError}] = usePostSignInMutation()
  let Navigate = useNavigate()
  if(isSuccess){
    localStorage.setItem("token", data.token)
    Navigate("/admin")
  }
  if(isError){
   alert("xato")
  }
  const handleSignUp = (e)=>{
    signUp({username,password})
    e.preventDefault(); 
  }
  return (
    <div className='login'>
      <div className='login__items'>
        <p className='login__text'>Username</p>
      <input className='login__input' type="text" value={username} onChange={e => setUsername(e.target.value)}/>
      <p className='login__text'>Password</p>
      <input className='login__input' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button className='login__btn' onClick={handleSignUp}>Login</button>
    </div>
   
    </div>
  )
}

export default Login
