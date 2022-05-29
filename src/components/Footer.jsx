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
            <img className='randomImg' src='https://c.tenor.com/S2XxWuiUGNYAAAAC/sussy-baka-baka.gif' />
            <img className='randomImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/576px-Moai_Rano_raraku.jpg' />
            <img className='randomImg' src='https://preview.redd.it/lf3wxh67vuh81.png?width=640&crop=smart&auto=webp&s=5577fb962db97a8d83cf65bb3e4b5ac6172091d8' />
            <img className='randomImg' src='https://pbs.twimg.com/profile_images/1264937935754924033/19oZ6aTE_400x400.jpg' />
            <img className='randomImg' src='https://preview.redd.it/p56juo2ybec61.jpg?auto=webp&s=2e4f74b1e94e8b3dff86caa7a23841074ee529a2'/>
            <img className='randomImg' src='https://c.tenor.com/gdqQlkh_C5QAAAAM/ricardo-milos-come-here.gif' />
            <img className='randomImg' src='https://pbs.twimg.com/media/FQ_7oIGaUAAIUNw.jpg' />
            <img className='randomImg' src='https://c.tenor.com/jiiEp5VV5nMAAAAM/the-rock-the-wok.gif' />

          </div>
        </div>

    </div>
  )
}

export default Footer