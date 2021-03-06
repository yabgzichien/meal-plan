import React, { useEffect } from 'react'
import AndroidIcon from '@mui/icons-material/Android';
import WebIcon from '@mui/icons-material/Web';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useHistory } from 'react-router-dom';

const Home1 = () => {

  const history = useHistory()

  useEffect(()=>{
    Aos.init({duration: 200, offset: 150,})
  }, [])

  return (
    <div className='homeContainer'>
  
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>

        <div className='homeInfoContainer popupAnimation' data-aos="fade-up-right">
          <h1 className='planHome' >Tired Of Planning What To Cook For Today?</h1>
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
        <img src="/mobile.png" alt="Mobile App" className='mobileImage' data-aos="fade-down" />
    </div>
   


</div>
  )
}

export default Home1