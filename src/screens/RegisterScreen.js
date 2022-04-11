import React from 'react'

import '../css/LoginScreen.css'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';

import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <div className='authContainer' >
        <div className='authBox' >
          <h1 className='authTitle'>Register</h1>
        

          <form className='authForm'>
          <div className='authTextInput'>
              <TextField id="filled-basic" label="Username" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
            <div className='authTextInput'>
              <TextField id="filled-basic" label="Email" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
            <div className='authTextInput'>
              <TextField id="filled-basic" label="Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>
            <div className='authTextInput'>
              <TextField id="filled-basic" label="Confirm Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>
          </form>
          

          <p className='newHere'>
            Already have an account? <Link to='/login'>Log in</Link> 
          </p>
        </div>
    </div>
  )
}

export default RegisterScreen