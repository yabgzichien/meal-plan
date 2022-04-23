import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom'
import { deletePlan } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const PlanSection = ({ image, name, mealId, meal }) => {

  const history = useHistory()
  const [user] = useAuthState(auth)

  const [mealDetails, setMealDetails] = useState({})

  const fetchMealDetails = async () =>{
    await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then(res=>{
      setMealDetails(res.data.meals[0])
    })
  }
  useEffect(()=>{
    fetchMealDetails()
  }, [])

  const viewRecipe = () =>{
    history.push(`/info/${mealId}`)
  }

  const remove = async () =>{
    await deletePlan(user.uid, mealId)
  }

  return (
    <div className='planSectionContainer'>
        <img src={image} className='planFoodPicture' />
        <div className='planDetailsInfo'>
          <div className='planSectionInfo'>
            <h1 className='foodName'>{name}</h1>
            <div className='planBtnContainer'> 
              <button className='removeFromPlan planBtn' onClick={remove} >Remove</button>
              <button className='viewRecipeBtn planBtn' onClick={viewRecipe}>View Info</button>
            </div>
          </div>
          <div className='ingredientContainer'>
              <h1> Ingredients </h1>
              <p> {mealDetails?.strMeasure1} {mealDetails?.strIngredient1} </p>
              <p> {mealDetails?.strMeasure2} {mealDetails?.strIngredient2} </p>
              <p> {mealDetails?.strMeasure3} {mealDetails?.strIngredient3} </p>
              <p> {mealDetails?.strMeasure4} {mealDetails?.strIngredient4} </p>
              <p> {mealDetails?.strMeasure5} {mealDetails?.strIngredient5} </p>
              <p> {mealDetails?.strMeasure6} {mealDetails?.strIngredient6} </p>
              <p> {mealDetails?.strMeasure7} {mealDetails?.strIngredient7} </p>
              <p> {mealDetails?.strMeasure8} {mealDetails?.strIngredient8} </p>
              <p> {mealDetails?.strMeasure9} {mealDetails?.strIngredient9} </p>
              <p> {mealDetails?.strMeasure10} {mealDetails?.strIngredient10} </p>
              <p> {mealDetails?.strMeasure11} {mealDetails?.strIngredient11} </p>
              <p> {mealDetails?.strMeasure12} {mealDetails?.strIngredient12} </p>
              <p> {mealDetails?.strMeasure13} {mealDetails?.strIngredient13} </p>
              <p> {mealDetails?.strMeasure14} {mealDetails?.strIngredient14} </p>
              <p> {mealDetails?.strMeasure15} {mealDetails?.strIngredient15} </p>
              <p> {mealDetails?.strMeasure16} {mealDetails?.strIngredient16} </p>
              <p> {mealDetails?.strMeasure17} {mealDetails?.strIngredient17} </p>
              <p> {mealDetails?.strMeasure18} {mealDetails?.strIngredient18} </p>
              <p> {mealDetails?.strMeasure19} {mealDetails?.strIngredient19} </p>
              <p> {mealDetails?.strMeasure20} {mealDetails?.strIngredient20} </p>
          </div>
        </div>
    </div>
  )
}

export default PlanSection