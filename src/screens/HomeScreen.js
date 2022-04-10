import React from 'react'

import '../css/HomeScreen.css'
import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';

import { Link } from 'react-router-dom'

const HomeScreen = () => {
  

  return (
      <div className='home'>
        <div className='homeContainer'>
    
            <div className='homeTextContainer'>

                <h1 className='planHome' >Plan Your Everday Meal</h1>
                <p>Get Started on</p>

                <div className=''>
                <Button variant="contained" color="success" style={{marginTop: '5px'}}> <AndroidIcon />  <p style={{marginLeft: '10px'}}>Android </p> </Button>
                    <p style={{marginTop: '5px'}}>or</p>
                <Button variant="contained" style={{marginTop: '5px'}}  > 
                    <Link to='/home' style={{display: 'flex', alignItems: 'center'}}>
                        Continue On The Web <WebIcon />
                    </Link>
                </Button>
                </div>


            </div>

        </div>
      </div>
  )
}

export default HomeScreen