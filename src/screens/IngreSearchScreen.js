import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'

import MealInfoHeader from '../components/MealInfoHeader'
import Meals from '../components/Meals'

import { CircularProgress } from '@mui/material'

import '../css/IngreSearchScreen.css'

const IngreSearchScreen = () => {
  
  const { ingre } = useParams()
  const [ingreDes, setIngreDes] = useState('')
  const [availableMeals, setAvailableMeals] = useState([])
  const [loadingDes, setLoadingDes] = useState(true)
  const [loadingMeals, setLoadingMeals] = useState(true)

  const fetchIngredientInfo = async () =>{
    await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
      const data = res.data.meals.find(ingre=>(
        ingre.strDescription
      ))
      setIngreDes(data.strDescription)
      setLoadingDes(false)
    }).catch(err=>{
      alert(err.message)
      setLoadingDes(false)
    })
  }

  const fetchAvailableMeals = async () =>{
    await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingre}`).then(res=>{
      setAvailableMeals(res.data.meals)
      setLoadingMeals(false)
    }).catch(err=>{
      alert(err.message)
      setLoadingMeals(false)
    })
  }

  useEffect(()=>{
    fetchIngredientInfo()
    fetchAvailableMeals()
  }, [])

  return (
    <>
      <MealInfoHeader />
      <div className='ingreSearchContainer'>
        { !loadingDes ? 
        <div className='ingreDesContainer'>
          <h1>{ingre}</h1>
          <p className='desParagraph'>{ingreDes}</p>
        </div>:
        <div className='ingreDesContainer'>
          <h1>{ingre}</h1>
          <CircularProgress />
        </div>
        }

        { !loadingMeals ?
        <div className='filteredMeals'>
          {availableMeals?.map(meal=>(
            <Meals image={meal.strMealThumb} name={meal.strMeal} mealId={meal.idMeal} />
          ))}
        </div> : 
        <div className='ingreDesContainer'>
          <CircularProgress />
        </div>
        }
      </div>
    </>
  )
}

export default IngreSearchScreen