import React from 'react'
import '../css/TotalAmount.css'

const TotalAmount = () => {
  return (
    <div className='totalAmountContainer'>
        <div className='totalPriceContainer'>
            <h2>Total:</h2>
            <p className='totalPrice'>RM 100</p>

            <button className='checkoutBtn'> Checkout </button>
        </div>
    </div>
  )
}

export default TotalAmount