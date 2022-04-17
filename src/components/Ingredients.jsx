import React from 'react'
import '../css/Ingredients.css'

import { Link } from 'react-router-dom'

const Ingredients = ({ name }) => {
   
  return (
    <Link to={`/ingredients/${name}`} style={{textDecoration: 'none', color: 'black'}}>
    <div className='ingredientsContainer'>
       <p>{name}</p>
       <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} style={{width: '200px', height: '200px'}} />
    </div>
    </Link>
  )
}

export default Ingredients