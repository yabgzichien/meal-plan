import React, { useEffect, useState, useContext } from 'react'

import axios from 'axios'

import Header from './Header'
import Meals from './Meals'

import '../css/Home.css'
import SearchContext from '../SearchContext'

const Home = () => {

  const { meals, setMeals } = useContext(SearchContext)

  useEffect(()=>{
    let randomizeMeals = []
    // axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(res=>{
    //     setMeals(res.data.meals)
    // }).catch(err=>{
    //     console.log(err)
    // })

    const fetchRandom = async() =>{
        for(let i = 0; i < 12; i++)
            await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
                randomizeMeals.push(res.data.meals[0])
            })

        setMeals(randomizeMeals)
    }

    fetchRandom()

  }, [])

  return (
    <>
    <Header isAuth={true} />
    <div className='homeCContainer'>
        <div className='mealsContainerBox'>
          <h3>Random Meals</h3>
          <div className='randomMeals'>
            
            {
                meals.map(meal=> 
                <Meals mealId={meal.idMeal} image={meal.strMealThumb} name={meal.strMeal} key={meal.idMeal} />)
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default Home