import React from 'react'

import '../css/Meals.css'

const Meals = ({ image, name }) => {
  return (
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
  )
}

export default Meals