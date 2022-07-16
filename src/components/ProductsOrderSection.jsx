import React from 'react'

const ProductsOrderSection = ({ image, name, price, quantity }) => {
  return (
    <div className='variableSection'>
        <div style={{display: 'flex', alignItems: 'center'}} > 
            <img src={image} className='checkoutImage' />
            <p>{name}</p>
        </div>
        <p className='flexcenter'> {quantity} </p>
        <p className='flexcenter'>RM{price/quantity}</p>
        <p className='flexcenter'>RM{price}</p>
    </div>
  )
}

export default ProductsOrderSection