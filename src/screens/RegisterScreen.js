import React, { useState } from 'react'

import '../css/LoginScreen.css'
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase'

import Button from '@mui/material/Button';
import { doc, setDoc } from "firebase/firestore"; 
import Header from '../components/Header';

const RegisterScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const createAccount = () =>{
    if(password === confirmPassword){
      createUserWithEmailAndPassword(auth, email, password).then(userCredential=>{
        const user = userCredential.user
        const data = { 
          username: username,
          email: user.email,
          profilePicture: user.photoURL,
          id: user.uid,
        }
        setDoc(doc(db, 'users', user.uid), data, { merge: true })
      }).catch(err=>{
        alert(err.message)
      })
    }else{
      alert('Password does not match')
    }
    
  }

  return (
    <>
    <Header isAuth={false} />
    <div className='authContainer' >
        <div className='authBox' >
          <h1 className='authTitle'>Register</h1>
        

          <form className='authForm'>
          <div className='authTextInput'>
              <TextField onChange={e=> setUsername(e.target.value)} value={username} id="filled-basic" label="Username" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
          
         
          <select className="gender" >
              <option> Choose a gender</option>
              <option value="volvo">Male</option>
              <option value="saab">Female</option>
              <option> No gender </option>
            
              <option>  Male, but identify as female </option>
              <option>  Female, but identify as male </option>

              <option>Male Overweight so has boobs</option>
              <option>  Born without genitals - identify as male </option>
              <option>  Born without genitals - identify as female </option>
              <option>  Born without genitals - proud of it </option>
              <option>  Born a male, bad circumcision, raised a female </option>


              <option>  Male, but curious what being a Female is Like </option>
              <option>  Female, but curious what being a Male is Like </option>
              <option> Megatron 30123 </option>
              <option> Attack Helipcoter </option>
              <option value="audi">Ferrari</option>
              <option value="mercedes">Mercedes</option>
              <option>None</option>
              <option>Other</option>
            </select>



            <div className='authTextInput'>
              <TextField onChange={e=> setEmail(e.target.value)} value={email} id="filled-basic" label="Email" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} />
            </div>
            <div className='authTextInput'>
              <TextField onChange={e=> setPassword(e.target.value)} value={password}  id="filled-basic" label="Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>
            <div className='authTextInput'>
              <TextField onChange={e=> setConfirmPassword(e.target.value)} value={confirmPassword} id="filled-basic" label="Confirm Password" variant="filled" style={{backgroundColor: '#f5f5f5', width: '300px'}} type='password' />
            </div>
            <Button onClick={createAccount} variant="contained">Register</Button>
          </form>
          

          <p className='newHere'>
            Already have an account? <Link to='/login'>Log in</Link> 
          </p>
        </div>
    </div>
    </>
  )
}

export default RegisterScreen