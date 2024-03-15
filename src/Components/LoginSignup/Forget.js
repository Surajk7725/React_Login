import React from 'react'
import { MdEmail } from "react-icons/md";
import './Login.css';
import { Link } from 'react-router-dom';


function Forget() {
  return (
    <div className='wrapper'>
        <form action=" ">
            <h1>Forget Password</h1>
            <div className='input-box'>
                <input type='email' placeholder='Email' required/>
                <MdEmail className='icon'/>
            </div>
            <Link to='/'><button type='submit'>Submit Now</button></Link>
        </form>
    </div>
  )
}

export default Forget