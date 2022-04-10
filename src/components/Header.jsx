import React from 'react'

import '../css/Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <h2 className='companyName'>MealPlan</h2>

        <div className='auth'>
         <h3 className='authBtn'> Login </h3>
         <h3 className='authBtn'>Register</h3>
        </div>
       
    </div>
  )
}

export default Header