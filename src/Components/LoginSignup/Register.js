import React from 'react';
import './Login.css';
// import '../../App.css';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='main'>
    <div className='wrapper'>
        <form action=" ">
            <h1>Sign Up</h1>
            <div className='input-box'>
                <input type='text' placeholder='Full Name' required/>
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='email' placeholder='Email' required/>
                <MdEmail className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>

            <button type='submit'>Register</button>

            <div className='login-link'>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register;
