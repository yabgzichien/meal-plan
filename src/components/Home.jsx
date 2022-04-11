import React, { useEffect, useState, useContext } from 'react'

import axios from 'axios'

import Header from './Header'
import Meals from './Meals'

import '../css/Home.css'
import SearchContext from '../SearchContext'

const Home = () => {

  const { meals, setMeals } = useContext(SearchContext)
  const [random, setRandom] = useState([])

  useEffect(()=>{
    let randomizeMeals = []
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(res=>{
        setMeals(res.data.meals)
    }).catch(err=>{
        console.log(err)
    })

    const fetchRandom = async() =>{
        await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
            randomizeMeals.push(res.data.meals)
            console.log(res.data.meals)
        })
        setRandom(randomizeMeals)
    }

    fetchRandom()

  }, [])

  console.log(random)
  return (
    <>
    <Header auth={true} />
    <div>
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