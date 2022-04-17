import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import MealInfoHeader from '../components/MealInfoHeader'
import Header from '../components/Header'
import Meals from '../components/Meals'

import axios from 'axios'

import '../css/SearchScreen.css'

const SearchScreen = () => {
  const { search } = useParams()
  const [searchMeals, setSearchMeals] = useState([])
  const [loading, setLoading] = useState(true)
   
  const fetchMeals = async () =>{
      await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>{
        setSearchMeals(res.data.meals)
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
        <Header isAuth={true} />
        <div className='alphaSearchContainer'>
            <div className='alphaTitleContainer'>
                <p>Showing Search Result of </p>
                <h1 className='alphaTitle'>{search}</h1>
            </div>
            
            <div className='filteredMeals'>
                {searchMeals?.map(meal=>(
                    <Meals name={meal.strMeal} image={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal} />
                ))}
            </div>
        </div>
    </>
  )
}

export default SearchScreen