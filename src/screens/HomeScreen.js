import React from 'react'

import '../css/HomeScreen.css'
import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';

import { Link, useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'

const HomeScreen = ({ auth }) => {
  
  const history = useHistory()

  return (
      <>
   
      { auth ? 
        <Home />
      :
      <>
      <Header isAuth={false} />
      <div className='home'>
        <div className='homeContainer'>
  
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>

                <div className='homeInfoContainer'>
                  <h1 className='planHome' >Tired Of Thinking What To Cook For Today?</h1>
                  <p style={{ fontSize: '24px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>
                    Plan your meal with Kitchen Delight today
                  </p>

                  <div className='downloadHome'>

                  <h3 style={{ textDecoration: 'underline' }}>Download it on</h3>
                  <a  target="_blank" rel="noopener" href="https://mega.nz/file/IMcjAQiJ#3EEmeqqfH2kh3sxbEXxI0enn-ZxBO3ogpbKBrO3onl0">
                    <button className='downloadAndroid' style={{marginTop: '5px'}}>  
                      <AndroidIcon />  <p style={{marginLeft: '10px'}}>Android </p> 
                    </button>
                  </a>
                      <p style={{marginTop: '5px'}}>or</p>
                  
      
                    <button className='continueWeb' style={{marginTop: '5px'}} onClick={() => history.push('/login')} > 
                            Continue On The Web <WebIcon />  
                    </button>
                
                  </div>
                </div>
                <img src="/mobile.png" alt="Mobile App" style={{marginRight: '20px', width: '400px', objectFit: 'contain'}} />
            </div>
           


        </div>

         <div className="home">
           <div  className="homeContainerp2">

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
              <img src='/recipe.png'  style={{width: '570px', objectFit: 'contain'}} />

              <div className='homeInfoContainer'>
                  <h2 className='planHome'>With Lots of Recipes to chose from</h2>
                  <div style={{padding: '30px'}}>
                    <p style={{fontSize: '20px', marginBottom: '20px'}}>
                      There are various type of meals you can choose from. 
                    </p>
                    <p style={{fontSize: '20px'}}>
                      Whether you are a vegan or not, alergic to peanut or not, there are always a meal 
                      meal recipe that are suitable for you
                    </p>
                  </div>
              </div>


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