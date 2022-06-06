import React, { useEffect } from 'react'

import '../css/HomeScreen.css'

// Sub-Screens
import Home1 from '../components/subScreens/Home1'
import Home2 from '../components/subScreens/Home2'
import Home3 from '../components/subScreens/Home3'

import { useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HomeScreen = ({ auth }) => {
    const history = useHistory()

    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

  return (
      <>
   
      { auth ? 
        <Home />
      :
      <>
      <Header isAuth={false} />
      <div style={{ backgroundColor: 'green', height: '100px',  }}></div>
      <div className='home'>

        {/* 1st Part of the screen */}
        <Home1 />


        {/* Second Part of the screen */}
        <Home2 />


        {/* Third part of the screen */}
        <Home3 />


      </div>
      
        </>
        }
      </>
  )
}

export default HomeScreen