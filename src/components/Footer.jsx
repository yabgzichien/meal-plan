import React from 'react'
import '../css/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='githubContainer'>
        <a href='https://github.com/yabgzichien/meal-plan' target='_blank' className='githubContainer' >
          <img style={{width: '100px'}} src='https://camo.githubusercontent.com/29137a622c86b65c2dfc11a07295c56779eb13acb781e0ccfe00c7144b7d6173/68747470733a2f2f76696e63656e742d79616f32372e6769746875622e696f2f70682d69636f6e2d67656e2f6769742e706e67'/>
          <p style={{color: 'white'}} >Source Code </p>
          <GitHubIcon style={{color: 'white', marginLeft: '10px', fontSize:'40px'}} />
        </a>
      </div>
      
      <div className='sponsorsContainer'>
          <p style={{color: 'white'}}>Thanks to our sponsors: </p>

          <div className='randomImageContainer'>
            <img className='randomImg' src='/melon.png' />
            <img className='randomImg' src='https://steamuserimages-a.akamaihd.net/ugc/1016070654744013251/F2B0B15BDD19635D0A92911F90F9ABB1B33F9F09/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' />
            <img className='randomImg' src='https://pbs.twimg.com/profile_images/1264937935754924033/19oZ6aTE_400x400.jpg' />
            <img className='randomImg' src='https://i1.sndcdn.com/artworks-hmj2ELsKHynVPQwC-hwaCcA-t240x240.jpg'/>
            <img className='randomImg' src='https://c.tenor.com/gdqQlkh_C5QAAAAM/ricardo-milos-come-here.gif' />
            <img className='randomImg' src='https://pbs.twimg.com/media/FQ_7oIGaUAAIUNw.jpg' />
            <img className='randomImg' src='https://c.tenor.com/jiiEp5VV5nMAAAAM/the-rock-the-wok.gif' />

          </div>
        </div>

    </div>
  )
}

export default Footer