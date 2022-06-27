import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/CountrySearchScreen.css'

import Meals from '../components/Meals'

import MealInfoHeader from '../components/MealInfoHeader'
import Header from '../components/Header'

const CountrySearchScreen = () => {
  
  const [countryMeals, setCountryMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const { country } = useParams()

  const countryFlag = (countryName) =>{
    switch(countryName){
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
          return <img className='nationalFlag' src="/unknown.png" />
      case 'Vietnamese':
        return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/vm-flag.gif' />
      case 'Turkish':
          return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/tu-flag.gif' />
      default:
        return
    }
  }

  const fetchCounrtyMeals = async () =>{
      await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`).then(res=>{
        setCountryMeals(res.data.meals)
        setLoading(false)
      }).catch(err=>{
          alert(err.message)
          setLoading(false)
      })
  }

  useEffect(()=>{
    fetchCounrtyMeals()
  },[])

  return (
    <>
        <Header isAuth={true} />
        <div className='countrySearchContainer'>
            <div className='countryTitleContainer'>
                {countryFlag(country)} { country }
            </div>
            <div className='filteredMeals'>
                {countryMeals.map(meal=>(
                    <Meals name={meal.strMeal} image={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal} />
                ))}
            </div>
        </div>
    </>
  )
}

export default CountrySearchScreen