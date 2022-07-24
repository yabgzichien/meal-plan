import React, { useEffect, useState } from 'react'
import '../css/AllIngredientsScreen.css'
import Header from '../components/Header'
import Ingredients from '../components/Ingredients'
import axios from 'axios'

const AllIngredientsScreen = () => {

  const [ingredients, setIngredients] = useState([])
  let offset = 10

  const fetchIngredients = async() =>{
        let tempIngredientsArr = []
        console.log("spread1" , ...tempIngredientsArr)
        offset += 10
        for(let i = 0; i < offset; i++){
          await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
            tempIngredientsArr.push(res.data.meals[i])
          }).catch(err=>{
            alert(err.message)
          })
    
        }
        
        setIngredients(oldIngredients => { return  [...oldIngredients, ...tempIngredientsArr] }) 


  }

  

  const handleScroll = e =>{
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
      fetchIngredients()
      console.log("offset: ", offset)
      console.log(ingredients)
    }
  } 

  useEffect(()=>{
    fetchIngredients()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header isAuth={true} />
      <div className='allIngredientsMainContainer'>
        <div className='allIngredientsTitle'>
          <h1> All Ingredients  </h1>
        </div>

        <div className='allIngredientsBox'>
          { 
            ingredients?.map((ingre, index)=>(
              <Ingredients name={ingre?.strIngredient} key={index} />
            )) 
          }
        </div>
      </div>
    </>
  )
}

export default AllIngredientsScreen