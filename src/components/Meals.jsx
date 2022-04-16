import React from 'react'

import { Link } from 'react-router-dom'

import '../css/Meals.css'

const Meals = ({ image, name, mealId }) => {

  return (
    
    <Link to={`/info/${mealId}`} style={{textDecoration: 'none', color: 'black'}}>
    <div className='mealsContainer'>
        <img src={image} className='mealsImage' />
        <div className='infoContainer'>
         <h2 style={{maxWidth: '300px', textAlign: 'center'}} >{name}</h2>
         <div className='btnContainer'>
            <button className='btn'>Add to Plan</button>
            <button className='btn'>View Recipe</button>
         </div>
        </div>

    </div>
    </Link>
  )
}

export default Meals