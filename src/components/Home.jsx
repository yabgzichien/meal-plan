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
        for(let i = 0; i < 15; i++)
            await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
                randomizeMeals.push(res.data.meals[0])
            })

        setMeals(randomizeMeals)
    }

    fetchRandom()

  }, [])

  console.log(meals)
  return (
    <>
    <Header auth={true} />
    <div className='homeCContainer'>
        <div className='mealsContainerBox'>
            {
                meals.map(meal=> 
                <Meals image={meal.strMealThumb} name={meal.strMeal} />)
            }
        </div>
    </div>
    </>
  )
}

export default Home