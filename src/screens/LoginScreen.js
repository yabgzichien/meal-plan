import React from 'react'

import '../css/LoginScreen.css'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';

import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className='authContainer' >
        <div className='authBox' >
          <h1 className='authTitle'>Login</h1>
        

          <form className='authForm'>
            <div className='authTextInput'>
              <TextField id="filled-basic" label="Email" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
            <div className='authTextInput'>
              <TextField id="filled-basic" label="Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>
          </form>
          
          <p className='or'>or</p>

          <div className='iconsContainer'>
            <button className='google'><GoogleIcon/>Google</button>
          </div>

          <p className='newHere'>
            New here? <Link to='/register'>Sign Up</Link> 
          </p>
        </div>
    </div>
  )
}

export default LoginScreen