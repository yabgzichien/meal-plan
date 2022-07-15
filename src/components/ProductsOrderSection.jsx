import React from 'react'

const ProductsOrderSection = ({ image, name }) => {
  return (
    <div className='variableSection'>
        <div style={{display: 'flex', alignItems: 'center'}} > 
            <img src={image} className='checkoutImage' />
            <p>{name}</p>
        </div>
        <p className='flexcenter'> 5 </p>
        <p className='flexcenter'>10</p>
        <p className='flexcenter'>50</p>
    </div>
  )
}

export default ProductsOrderSection