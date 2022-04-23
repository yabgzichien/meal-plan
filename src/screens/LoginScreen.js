import React, { useState } from 'react'

import '../css/LoginScreen.css'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

// firebase
import { googleProvider, auth, db } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"; 

import { Link } from 'react-router-dom'

import Header from '../components/Header'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(result=>{
      // put inside database (easier to keep track)
      const user = result.user
      const data = { 
        username: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        id: user.uid,
      }
      setDoc(doc(db, 'users', user.uid), data, { merge: true })
    }).catch(err=>{
      console.log(err.message)
    })
  }

  const loginWithEmailPassword = () =>{
    signInWithEmailAndPassword(auth, email, password).then(userCredential=>{
      const user = userCredential.user
      // idk what to do with this 
    }).catch(err=>{
      alert(err.message)
    })
  }

  return (
    <>
    <Header isAuth={false} />
    <div className='authContainer' >
        <div className='authBox' >
          <h1 className='authTitle'>Login</h1>
        

          <form className='authForm'>
            <div className='authTextInput'>
              <TextField onChange={e=> setEmail(e.target.value)} value={email} id="filled-basic" label="Email" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
            <div className='authTextInput'>
              <TextField onChange={e=> setPassword(e.target.value)} value={password} id="filled-basic" label="Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>

            <Button onClick={loginWithEmailPassword} variant="contained">Login</Button>
          </form>

          
          <p className='or'>or</p>

          <div className='iconsContainer'>
            <button onClick={loginWithGoogle} className='google' ><GoogleIcon/>Google</button>
          </div>

          <p className='newHere'>
            New here? <Link to='/register'>Sign Up</Link> 
          </p>
        </div>
    </div>
    </>
  )
}

export default LoginScreen