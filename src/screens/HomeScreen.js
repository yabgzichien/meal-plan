import React from 'react'

import '../css/HomeScreen.css'
import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'

const HomeScreen = ({ auth }) => {
  

  return (
      <>
   
      { auth ? 
        <Home />
      :
      <>
      <Header isAuth={false} />
      <div className='home'>
        <div className='homeContainer'>
    
            <div className='homeTextContainer'>

                <h1 className='planHome' >Plan Your Everday Meal</h1>
                <p>Get Started on</p>

                <div className=''>
                <Button variant="contained" color="success" style={{marginTop: '5px'}}> <AndroidIcon />  <p style={{marginLeft: '10px'}}>Android </p> </Button>
                    <p style={{marginTop: '5px'}}>or</p>
                
                <Link to='/login' style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant="contained" style={{marginTop: '5px'}}  > 
                            Continue On The Web <WebIcon />  
                    </Button>
                </Link>
                </div>


            </div>

        </div>
      </div>
        </>
        }
      </>
  )
}

export default HomeScreen