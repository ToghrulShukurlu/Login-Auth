import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../Data/users.json'

const LoginForm = ({ setShowLogin }) => {
    const[showErr,setShowErr]= useState(false)
    const navigate = useNavigate()


    const SubmitHandle=(e)=>{
        e.preventDefault()//resfresh'in qarshisini alir
        const data= new FormData(e.target)
        const formProperties= Object.fromEntries(data)
        const result = users.find(item =>{
            return (
              item.finCode === formProperties.finCode &&
              item.password === formProperties.password
            );
        })
        result ? navigate('/account') : setShowErr(true)
    }
  return (
    <form on onSubmit={SubmitHandle}>
      <p onClick={() => setShowLogin(false)}>x</p>
      <h1>LOGIN</h1>
      <input onChange={()=>setShowErr(false)} required name="finCode" type="text" placeholder="Username" />
      <input  onChange={()=>setShowErr(false)}required name='password' type="password" placeholder="Pasword" />
      <button type="submit">Submit</button>
      {showErr && <span>Wrong Username or Password</span>}
    </form>
  );
};

export default LoginForm