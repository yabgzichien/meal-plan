import React from 'react'
import '../css/Ingredients.css'

import { useHistory } from 'react-router-dom'

const Ingredients = ({ name }) => {
  const history = useHistory() 

  return (
    <div onClick={()=> history.push(`/ingredients/${name}`)} className='ingredientMainContainer' >
    
    
    {
      name === "Sweet Potatoes" ?
     <img src={`http://assets.stickpng.com/thumbs/585ea837cb11b227491c3545.png`} style={{width: '200px', height: '200px'}} />:
     <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} style={{width: '200px', height: '200px'}} />
      
    }

      <div className='ingredientsContainer'>
        <p>{name}</p>
        <p style={{textAlign: 'center'}}> RM 15/kg</p>
      </div>

    </div>
  )
}

export default Ingredients