import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import '../css/MealInfoScreen.css'
import MealInfoHeader from '../components/MealInfoHeader'
import Header from '../components/Header'

import { addToPlan } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const MealInfoScreen = () => {

  const [mealObj, setMealObj] = useState({})

  const { id } = useParams()

  const [user] = useAuthState(auth)

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>{
        setMealObj(res.data.meals[0])
    }).catch(err=>{
        alert(err.message)
    })
  }, [])


  const youtubeId = () =>{
    if(mealObj.strYoutube){
        const normal = mealObj.strYoutube
        const ytId = normal.substring(normal.length - 11)
        return ytId
    }else{
        return null
    }
  }

  const addToYourPlan = async () =>{
    const newMealObj = {
      mealId: mealObj.idMeal,
      name: mealObj.strMeal,
      image: mealObj.strMealThumb
    }
    await addToPlan(user.uid, newMealObj).then(res=>{
      alert("Sucessfully added to your plan")
    })
  }

  const countryFlag = () =>{
    switch(mealObj.strArea){
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
        return <img className='nationalFlag' src='https://www.shiplocation.com/Flags%20-%20normal/uu.png' />
      case 'Vietnamese':
        return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/vm-flag.gif' />
      case 'Turkish':
        return <img className='nationalFlag' src='https://www.worldometers.info/img/flags/tu-flag.gif' />
      default:
        return
    }
  }

  return (
    <>
    <Header isAuth={true} />
    <div className='mealScreenContainer dessertBackgroundImage'>
        <div className='whiteContainer'>
        <div className='infoTitleContainer'>
          <h1 className='mealName' > {mealObj.strMeal} </h1>
          {countryFlag()}
          <p>({mealObj.strArea})</p>
        </div>
        

        <div className='instructionContainer'>
          <img className='mealScreenImage' src={mealObj.strMealThumb} />
          <div className='ingredientContainer'>
            <h1> Ingredients </h1>
            <p> {mealObj?.strMeasure1} {mealObj?.strIngredient1} </p>
            <p> {mealObj?.strMeasure2} {mealObj?.strIngredient2} </p>
            <p> {mealObj?.strMeasure3} {mealObj?.strIngredient3} </p>
            <p> {mealObj?.strMeasure4} {mealObj?.strIngredient4} </p>
            <p> {mealObj?.strMeasure5} {mealObj?.strIngredient5} </p>
            <p> {mealObj?.strMeasure6} {mealObj?.strIngredient6} </p>
            <p> {mealObj?.strMeasure7} {mealObj?.strIngredient7} </p>
            <p> {mealObj?.strMeasure8} {mealObj?.strIngredient8} </p>
            <p> {mealObj?.strMeasure9} {mealObj?.strIngredient9} </p>
            <p> {mealObj?.strMeasure10} {mealObj?.strIngredient10} </p>
            <p> {mealObj?.strMeasure11} {mealObj?.strIngredient11} </p>
            <p> {mealObj?.strMeasure12} {mealObj?.strIngredient12} </p>
            <p> {mealObj?.strMeasure13} {mealObj?.strIngredient13} </p>
            <p> {mealObj?.strMeasure14} {mealObj?.strIngredient14} </p>
            <p> {mealObj?.strMeasure15} {mealObj?.strIngredient15} </p>
            <p> {mealObj?.strMeasure16} {mealObj?.strIngredient16} </p>
            <p> {mealObj?.strMeasure17} {mealObj?.strIngredient17} </p>
            <p> {mealObj?.strMeasure18} {mealObj?.strIngredient18} </p>
            <p> {mealObj?.strMeasure19} {mealObj?.strIngredient19} </p>
            <p> {mealObj?.strMeasure20} {mealObj?.strIngredient20} </p>
        </div>
        </div>
        
        <div className='instructionContainer'>
            <p className='instruction' >{mealObj.strInstructions}</p>
            <iframe width='420' height='345' src={`https://www.youtube.com/embed/${youtubeId()}`} /> 
        </div>


      <button className='addToYourPlan' onClick={addToYourPlan} > Add To Your Plan </button>
      </div>
    </div>
    </>
  )
}

export default MealInfoScreen