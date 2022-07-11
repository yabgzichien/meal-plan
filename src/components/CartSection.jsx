import React from 'react'

const CartSection = ({ image, name, price, quantity, unit }) => {
  return (
    <div className='planSectionContainer'>
    <img src={image} className='planFoodPicture' />
    <div className='planDetailsInfo'>
      <div className='planSectionInfo'>
        <h1 className='foodName'>{name}</h1>
        <div className='planBtnContainer'> 
          <button className='removeFromPlan planBtn'>Remove</button>
          <button className='viewRecipeBtn planBtn' >View Info</button>
        </div>
      </div>
      <div className='ingredientContainer'>
        <div className='priceInfoContainer'>
          <h2>Quantity</h2>
          <p> {quantity} {unit}</p>
        </div>
        <div className='priceInfoContainer'>
          <h2> Price </h2>
          <p>RM{ price }</p>
        </div>

      </div>
    </div>
</div>    
  )
}

export default CartSection