import React from 'react'
import '../css/CountrySearch.css'

const CountrySearch = ({ countryName }) => {

    const countryFlag = (country) =>{
        switch(country){
          case 'American':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/us-flag.gif' />
          case 'British':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/uk-flag.gif' />
          case 'Canadian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/ca-flag.gif' />
          case 'Chinese':
            return <img className='nationalFlag' src='https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg'/>
          case 'Croatian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/hr-flag.gif' />
          case 'Dutch':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/nl-flag.gif' />
          case 'Egyptian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/eg-flag.gif' />
          case 'French':
             return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/fr-flag.gif' />
          case 'Greek':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/gr-flag.gif' />
          case 'Indian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/in-flag.gif' />
          case 'Irish':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/ei-flag.gif' />
          case 'Italian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/it-flag.gif' />
          case 'Jamaican':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/jm-flag.gif' />
          case 'Japanese':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/ja-flag.gif' />
          case 'Kenyan':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/ke-flag.gif' />
          case 'Malaysian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/my-flag.gif' />
          case 'Mexican':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/mx-flag.gif' />
          case 'Moroccan':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/mo-flag.gif' />
          case 'Polish': 
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/pl-flag.gif' />
          case 'Portuguese':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/po-flag.gif' />
          case 'Russian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/rs-flag.gif' />
          case 'Spanish':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/sp-flag.gif' />
          case 'Thai':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/th-flag.gif' />
          case 'Tunisian':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/ts-flag.gif' />
          case 'Unknown':
            return <img className='nationalFlag' src='https://www.shiplocation.com/Flags%20-%20normal/uu.png' />
          case 'Vietnamese':
            return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/vm-flag.gif' />
          case 'Turkish':
              return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/tu-flag.gif' />
          default:
            return
        }
      }
    
  return (
    <div className='countriesContainer'>
        { countryFlag(countryName.strArea) }
        <p>{ countryName.strArea }</p>
    </div>
  )
}

export default CountrySearch