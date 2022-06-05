import React from 'react'

import '../css/HomeScreen.css'
import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';

import { useHistory } from 'react-router-dom'

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

        {/* 1st Part of the screen */}
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
                    <button style={{ backgroundColor: '#63ff8d' }} className='downloadButton' >  
                      <AndroidIcon />  <p style={{marginLeft: '10px'}}>Android </p> 
                    </button>
                  </a>
                      <p style={{marginTop: '5px'}}>or</p>
                  
      
                    <button style={{ backgroundColor: '#6eafff' }} className='downloadButton' onClick={() => history.push('/login')} > 
                            Continue On The Web <WebIcon />  
                    </button>
                
                  </div>
                </div>
                <img src="/mobile.png" alt="Mobile App" className='mobileImage' />
            </div>
           


        </div>

        {/* Second Part of the screen */}
         <div>
           <div  className="homeContainerp2">

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
              <img src='/recipe.png'  style={{width: '570px', objectFit: 'contain'}} />

              <div className='homeInfoContainer'>
                  <h2 className='planHome'>With Wide Variety of Recipes to chose from</h2>
                  <div style={{padding: '30px'}}>
                    <p style={{fontSize: '20px', marginBottom: '20px'}}>
                      There are various type of meals you can choose from. 
                    </p>
                    <p style={{fontSize: '20px'}}>
                      Whether you are a vegan or not, alergic to peanut or not, there are always a meal 
                      meal recipe that are suitable for you
                    </p>
                    <p style={{fontSize: '20px'}}> Have no idea how to cook? No problem learn from our detailed recipes </p>
                  </div>
              </div>


            </div>
          </div>
          </div> 


        {/* Third part of the screen */}

 

        {/* Fourth Part of  the screen */}
        <div  className='homeContainer'> 
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
            
            
            <div className='homeInfoContainer'>
              <h1 className='planHome'>You can order our Ingredients</h1>

              <div style={{marginTop: '25px'}}>
                <h1> Why order from us?? </h1>
                <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide the most Organic and the Freshest Ingredients </li>
                <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide high quality yet affordable ingredients </li>
                <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide Lightning speed delivery </li>
                <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide free detailed recipes </li>
                <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> Convenient </li>

              </div>
            </div>

            <div  className='homeInfoContainer2'>
                <h1 className='planHome'>Get Your Membership Today !!</h1>
                <h2 style={{marginTop: '10px', fontWeight: '500'}}> To get Free Delivery off all Ingredients orders  </h2>


                <h1 style={{marginTop: '30px'}}> Limited Time Offer </h1>
                <div className='membershipInfo'> At only 
                  <span style={{textDecoration: 'line-through', fontSize: '16px', color: 'red', marginLeft: '5px'}} >RM20</span> 
                  <span style={{ color: 'blue', textDecoration: 'underline' }}> RM12 </span>/month
                </div>

                <button className='getMembership'>Get It now</button>
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