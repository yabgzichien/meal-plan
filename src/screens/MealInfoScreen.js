import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams, useHistory } from 'react-router-dom'

import '../css/MealInfoScreen.css'
import Header from '../components/Header'

import { addToPlan } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const MealInfoScreen = () => {

  const [mealObj, setMealObj] = useState({})

  const { id } = useParams()

  const [user] = useAuthState(auth)

  const history = useHistory()

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
            <li className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient1)} hidden={ifAvailabe(mealObj?.strIngredient1)}> {mealObj?.strMeasure1} {mealObj?.strIngredient1}   </li>
            <li className='ingredients'  onClick={()=> searchIngre(mealObj?.strIngredient2)} hidden={ifAvailabe(mealObj?.strIngredient2)}> {mealObj?.strMeasure2} {mealObj?.strIngredient2} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredien3)}  hidden={ ifAvailabe(mealObj?.strIngredient3)}> {mealObj?.strMeasure3} {mealObj?.strIngredient3} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient4)} hidden={ifAvailabe(mealObj?.strIngredient4)}> {mealObj?.strMeasure4} {mealObj?.strIngredient4} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient5)} hidden={ifAvailabe(mealObj?.strIngredient5)}> {mealObj?.strMeasure5} {mealObj?.strIngredient5} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient6)} hidden={ifAvailabe(mealObj?.strIngredient6)}> {mealObj?.strMeasure6} {mealObj?.strIngredient6} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient7)} hidden={ifAvailabe(mealObj?.strIngredient7)}> {mealObj?.strMeasure7} {mealObj?.strIngredient7} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient8)} hidden={ifAvailabe(mealObj?.strIngredient8)}> {mealObj?.strMeasure8} {mealObj?.strIngredient8} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient9)} hidden={ifAvailabe(mealObj?.strIngredient9)}> {mealObj?.strMeasure9} {mealObj?.strIngredient9} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient10)} hidden={ifAvailabe(mealObj?.strIngredient10)}> {mealObj?.strMeasure10} {mealObj?.strIngredient10} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient11)} hidden={ifAvailabe(mealObj?.strIngredient11)}> {mealObj?.strMeasure11} {mealObj?.strIngredient11} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient12)} hidden={ifAvailabe(mealObj?.strIngredient12)}> {mealObj?.strMeasure12} {mealObj?.strIngredient12} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient13)} hidden={ifAvailabe(mealObj?.strIngredient13)}> {mealObj?.strMeasure13} {mealObj?.strIngredient13} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient14)} hidden={ifAvailabe(mealObj?.strIngredient14)}> {mealObj?.strMeasure14} {mealObj?.strIngredient14} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient15)} hidden={ifAvailabe(mealObj?.strIngredient15)}> {mealObj?.strMeasure15} {mealObj?.strIngredient15} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient16)} hidden={ifAvailabe(mealObj?.strIngredient16)}> {mealObj?.strMeasure16} {mealObj?.strIngredient16} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient17)} hidden={ifAvailabe(mealObj?.strIngredient17)}> {mealObj?.strMeasure17} {mealObj?.strIngredient17} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient18)} hidden={ifAvailabe(mealObj?.strIngredient18)}> {mealObj?.strMeasure18} {mealObj?.strIngredient18} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient19)} hidden={ifAvailabe(mealObj?.strIngredient19)}> {mealObj?.strMeasure19} {mealObj?.strIngredient19} </li>
            <li  className='ingredients' onClick={()=> searchIngre(mealObj?.strIngredient20)} hidden={ifAvailabe(mealObj?.strIngredient20)}> {mealObj?.strMeasure20} {mealObj?.strIngredient20} </li>
        </div>
        </div>
        
        <div className='instructionContainer'>
            <p className='instruction' >{mealObj.strInstructions}</p>
            <iframe width='420' height='345' src={`https://www.youtube.com/embed/${youtubeId()}`} /> 
        </div>


      <button className='addToYourPlan' onClick={addToYourPlan} > Save to Plan </button>
      <button className='addToYourPlan' onClick={addToYourPlan} > Purchase Ingredients </button>

      </div>
    </div>
    </>
  )
}

export default MealInfoScreen