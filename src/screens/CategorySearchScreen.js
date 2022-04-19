// category filter will go here
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import MealInfoHeader from '../components/MealInfoHeader'
import Header from '../components/Header'
import Meals from '../components/Meals'

import axios from 'axios'

import '../css/SearchScreen.css'

const CategorySearchScreen = () => {
  const { search } = useParams()
  const [categoryMeals, setCategoryMeals] = useState([])
  const [loading, setLoading] = useState(true)
  

  const fetchMeals = () =>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`).then(res=>{
      setCategoryMeals(res.data.meals)
    }).catch(err=>{
      alert(err.message)
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
                <p>Showing Category of </p>
                <h1 className='alphaTitle'>{search}</h1>
            </div>
            
            <div className='filteredMeals'>
                {categoryMeals?.map(meal=>(
                    <Meals name={meal.strMeal} image={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal} />
                ))}
            </div>
        </div>
    </>
  )
}

export default CategorySearchScreen