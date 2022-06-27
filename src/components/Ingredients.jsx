import React from 'react'
import '../css/Ingredients.css'

import { Link } from 'react-router-dom'

const Ingredients = ({ name }) => {
   
  return (
    <Link to={`/ingredients/${name}`} style={{textDecoration: 'none', color: 'black'}}>
    <div className='ingredientsContainer'>
       <p>{name}</p>
    </div>       
    
    {
      name === "Sweet Potatoes" ?
     <img src={`http://assets.stickpng.com/thumbs/585ea837cb11b227491c3545.png`} style={{width: '200px', height: '200px'}} />:
     <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} style={{width: '200px', height: '200px'}} />
      
    }

    </Link>
  )
}

export default Ingredients