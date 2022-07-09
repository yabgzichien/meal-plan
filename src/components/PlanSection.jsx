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

  const searchIngre = (ingre) =>{

    if (ingre){
      history.push(`/ingredients/${ingre}`)
    }else if (!ingre){
      
    }
   
  }

  const ifAvailabe = (ingre) =>{
    if(ingre){
      return false
    }else {
      return true
    }
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
              <li className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient1)} hidden={ifAvailabe(mealDetails?.strIngredient1)}> {mealDetails?.strMeasure1} {mealDetails?.strIngredient1}   </li>
              <li className='ingredients'  onClick={()=> searchIngre(mealDetails?.strIngredient2)} hidden={ifAvailabe(mealDetails?.strIngredient2)}> {mealDetails?.strMeasure2} {mealDetails?.strIngredient2} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredien3)}  hidden={ ifAvailabe(mealDetails?.strIngredient3)}> {mealDetails?.strMeasure3} {mealDetails?.strIngredient3} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient4)} hidden={ifAvailabe(mealDetails?.strIngredient4)}> {mealDetails?.strMeasure4} {mealDetails?.strIngredient4} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient5)} hidden={ifAvailabe(mealDetails?.strIngredient5)}> {mealDetails?.strMeasure5} {mealDetails?.strIngredient5} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient6)} hidden={ifAvailabe(mealDetails?.strIngredient6)}> {mealDetails?.strMeasure6} {mealDetails?.strIngredient6} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient7)} hidden={ifAvailabe(mealDetails?.strIngredient7)}> {mealDetails?.strMeasure7} {mealDetails?.strIngredient7} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient8)} hidden={ifAvailabe(mealDetails?.strIngredient8)}> {mealDetails?.strMeasure8} {mealDetails?.strIngredient8} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient9)} hidden={ifAvailabe(mealDetails?.strIngredient9)}> {mealDetails?.strMeasure9} {mealDetails?.strIngredient9} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient10)} hidden={ifAvailabe(mealDetails?.strIngredient10)}> {mealDetails?.strMeasure10} {mealDetails?.strIngredient10} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient11)} hidden={ifAvailabe(mealDetails?.strIngredient11)}> {mealDetails?.strMeasure11} {mealDetails?.strIngredient11} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient12)} hidden={ifAvailabe(mealDetails?.strIngredient12)}> {mealDetails?.strMeasure12} {mealDetails?.strIngredient12} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient13)} hidden={ifAvailabe(mealDetails?.strIngredient13)}> {mealDetails?.strMeasure13} {mealDetails?.strIngredient13} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient14)} hidden={ifAvailabe(mealDetails?.strIngredient14)}> {mealDetails?.strMeasure14} {mealDetails?.strIngredient14} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient15)} hidden={ifAvailabe(mealDetails?.strIngredient15)}> {mealDetails?.strMeasure15} {mealDetails?.strIngredient15} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient16)} hidden={ifAvailabe(mealDetails?.strIngredient16)}> {mealDetails?.strMeasure16} {mealDetails?.strIngredient16} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient17)} hidden={ifAvailabe(mealDetails?.strIngredient17)}> {mealDetails?.strMeasure17} {mealDetails?.strIngredient17} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient18)} hidden={ifAvailabe(mealDetails?.strIngredient18)}> {mealDetails?.strMeasure18} {mealDetails?.strIngredient18} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient19)} hidden={ifAvailabe(mealDetails?.strIngredient19)}> {mealDetails?.strMeasure19} {mealDetails?.strIngredient19} </li>
              <li  className='ingredients' onClick={()=> searchIngre(mealDetails?.strIngredient20)} hidden={ifAvailabe(mealDetails?.strIngredient20)}> {mealDetails?.strMeasure20} {mealDetails?.strIngredient20} </li>
          </div>
        </div>
    </div>    
  )
}

export default PlanSection