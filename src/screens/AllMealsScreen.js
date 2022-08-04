import React, { useEffect, useState, useContext } from 'react'
import '../css/AllIngredientsScreen.css'
import Header from '../components/Header'
import axios from 'axios'
import Loading from '../components/Loading'
import Meals from '../components/Meals'

const AllMealsScreen = () => {

  const [loading, setLoading] = useState(false)

  const [meals, setMeals] = useState([])

  let offset = 0

  let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  const fetchIngredients = async () =>{
    setLoading(true)
    let tempIngredientsArr = []
    offset += 1
    if(offset > char.length)
    offset = offset % char.length
    await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${char[offset]}`).then(res=>{
      tempIngredientsArr.push(...res.data.meals)
      console.log(tempIngredientsArr)
      setLoading(false)
      setMeals(oldMeals => [...oldMeals, ...tempIngredientsArr] )
    })

  }

//   const fetchIngredients = async() =>{
//     setLoading(true)
//     for(let i = 0; i < offset; i++){
//       await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
//         tempIngredientsArr.push(res.data.meals[i])
//       }).catch(err=>{
//         alert(err.message)
//       })

//     }
    
//     setIngredients(oldIngredients => { return  [...oldIngredients, ...tempIngredientsArr] }) 
//     setLoading(false)

// }



const handleScroll = e =>{
if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
  fetchIngredients()
  console.log("offset: ", offset)
}
} 


  useEffect(()=>{
    fetchIngredients()
    window.addEventListener('scroll', handleScroll)
  }, [])

  console.log(meals)

  return (
    <>
      <Header isAuth={true} />
      <div className='allIngredientsMainContainer'>
        <div className='allIngredientsTitle'>
          <h1> All Meals  </h1>
        </div>

        <div className='allIngredientsBox'>

          {
            meals.map((meal, index)=>(
              <Meals image={meal?.strMealThumb} name={meal?.strMeal} mealId={meal?.idMeal} key={index} />
            ))
          }


        </div>
        { loading ? 

            <Loading />: null
          }
      </div>
    </>
  )
}

export default AllMealsScreen