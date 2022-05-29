import React from 'react'

import '../css/HomeScreen.css'
import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'

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

                <a  target="_blank" rel="noopener" href="https://mega.nz/file/IMcjAQiJ#3EEmeqqfH2kh3sxbEXxI0enn-ZxBO3ogpbKBrO3onl0">
                  <Button variant="contained" color="success" style={{marginTop: '5px'}}>  
                    <AndroidIcon />  <p style={{marginLeft: '10px'}}>Android </p> 
                  </Button>
                </a>
                    <p style={{marginTop: '5px'}}>or</p>
                
                <Link to='/login' style={{display: 'flex', alignItems: 'center'}}>
                    <Button variant="contained" style={{marginTop: '5px'}}  > 
                            Continue On The Web <WebIcon />  
                    </Button>
                </Link>
                </div>

                <img src="/melon.png" style={{width: '100px', height: '90px'}} alt="Melon Musk" />
            </div>
            <img src="/mobile.png" alt="Mobile App" />


        </div>

         <div className="home">
           <div className="homeContainerp2">
          

          </div>
          </div> 


      </div>
      
        </>
        }
      </>
  )
}

export default HomeScreen