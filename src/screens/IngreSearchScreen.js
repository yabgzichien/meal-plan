import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import Meals from '../components/Meals'

import { CircularProgress } from '@mui/material'
import '../css/IngreSearchScreen.css'
import Header from '../components/Header'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

import { addToCart } from '../utils/utils'

const IngreSearchScreen = () => {
  
  const [user] = useAuthState(auth)

  const { ingre } = useParams()
  const [ingreDes, setIngreDes] = useState('')
  const [ingreId, setIngreId] = useState(0)

  const [availableMeals, setAvailableMeals] = useState([])
  const [loadingDes, setLoadingDes] = useState(true)
  const [loadingMeals, setLoadingMeals] = useState(true)

  const [selectValue, setSelectValue] = useState(1)

  const fetchIngredientInfo = async () =>{
    await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{

      const data = res.data.meals

      const filtered = data.find(ing=>( 
        ing?.strIngredient == ingre
      ))

      setIngreId(filtered?.idIngredient)
      setIngreDes(filtered?.strDescription)
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

  const addIngreToCart = async () =>{
    const data = { 
      image: `https://www.themealdb.com/images/ingredients/${ingre}.png`,
      name: ingre,
      quantity: selectValue,
      unit: 'kg',
      ingreId,
      price: selectValue * 15
    }

    addToCart(user.uid, data).then(res=>{
      alert('Item sucessfully added to cart')
    }).catch(e=>{
      console.log(e.message)
    })

  }


  return (
    <>
      <Header isAuth={true} />
      <div className='ingreSearchContainer'>
        { !loadingDes ? 
        <div className='ingreDesContainer'>
          <h1>{ingre}</h1>
          <p className='desParagraph'>{ingreDes}</p>
          <div className='promoteToButContainer'>
            <div className='textAndCartContainer'>
             <h2 style={{marginBottom: '7px'}}>Buy our {ingre} for only <p style={{ textDecoration: 'underline' }}>RM15/kg</p></h2>
             <select style={{marginBottom: '20px'}} onChange={(e) => setSelectValue(e.target.value)}>
                <option> {selectValue} </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
             </select>kg

              <button onClick={addIngreToCart} className='addToCartIngreBtn'> Add To Cart</button>
            </div>
            <img src={`https://www.themealdb.com/images/ingredients/${ingre}.png`} className='ingredientImage' />  
          </div>
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