import React from 'react'
import '../css/Ingredients.css'

const Ingredients = ({ name }) => {
   
  return (
    <div className='ingredientsContainer'>
       <p>{name}</p>
       <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} style={{width: '200px', height: '200px'}} />
    </div>
  )
}

export default Ingredients