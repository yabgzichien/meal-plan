import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import MealInfoHeader from '../components/MealInfoHeader'
import Meals from '../components/Meals'

import axios from 'axios'

import '../css/Alphabets.css'

const AlphabetSearchScreen = () => {
  const { char } = useParams()
  const [alphabetMeals, setAlphabetMeals] = useState([])
  const [loading, setLoading] = useState(true)
   
  const fetchMeals = async () =>{
      await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`).then(res=>{
        setAlphabetMeals(res.data.meals)
        setLoading(false)
      }).catch(err=>{
          alert(err.message)
          setLoading(false)
      })
  }

  useEffect(()=>{
    fetchMeals()
  }, [])

  return (
    <>
        <MealInfoHeader />
        <div className='alphaSearchContainer'>
            <div className='alphaTitleContainer'>
                <h1 className='alphaTitle'>{char.toUpperCase()}</h1>
            </div>
            
            <div className='filteredMeals'>
                {alphabetMeals.map(meal=>(
                    <Meals name={meal.strMeal} image={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal} />
                ))}
            </div>
        </div>
    </>
  )
}

export default AlphabetSearchScreen