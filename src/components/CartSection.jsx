import React from 'react'
import { deleteCarts } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

const CartSection = ({ image, name, price, quantity, unit, ingreId }) => {

  const [user] = useAuthState(auth)

  const history = useHistory()

  const deleteCartsItem = () =>{
    deleteCarts(user.uid, ingreId).then(res=>{
      alert(`${name} has been removed`)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='planSectionContainer'>
    <img src={image} className='planFoodPicture' />
    <div className='planDetailsInfo'>
      <div className='planSectionInfo'>
        <h1 className='foodName'>{name}</h1>
        <div className='planBtnContainer'> 
          <button onClick={deleteCartsItem} className='removeFromPlan planBtn'>Remove</button>
          <button onClick={()=> history.push(`ingredients/${name}`)} className='viewRecipeBtn planBtn' >View Info</button>
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