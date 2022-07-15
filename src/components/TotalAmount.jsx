import React from 'react'
import '../css/TotalAmount.css'
import { useHistory } from 'react-router-dom'

const TotalAmount = ({ totalPrice }) => {
  const history = useHistory()

  return (
    <div className='totalAmountContainer'>
        <div className='totalPriceContainer'>
            <h2>Total:</h2>
            <p className='totalPrice'>RM {totalPrice}</p>

            <button onClick={()=> history.push('/checkout')} className='checkoutBtn'> Checkout </button>
        </div>
    </div>
  )
}

export default TotalAmount