import React, { useContext, useEffect } from 'react'
import CartSection from '../components/CartSection'
import '../css/CartScreen.css'
import Header from '../components/Header'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import CartsContext from '../CartsContext'
import { onSnapshot, collection } from 'firebase/firestore'
import TotalAmount from '../components/TotalAmount'

const CartScreens = () => {
  const [user] = useAuthState(auth)
  const { carts, setCarts } = useContext(CartsContext)
 

  useEffect(()=>{
    const unsub = onSnapshot(collection(db, 'carts', user.uid, 'cart'), snapshot=>{
      setCarts(snapshot.docs.map(doc=>(
        doc.data()
      )))
      return unsub
    })
 
   }, [])

   
   
  return (
    <> 
    <Header />
    <div className='cartScreenContainer'>
      <div className='cartTitle'>
        <h1>Cart</h1>
      </div>

      <div>
        {
          carts.map(cart=>(
            <CartSection name={cart?.name} image={cart?.image} price={cart?.price} quantity={cart?.quantity} unit={cart?.unit}  />
          ))
        }
      </div>

      <TotalAmount />
    </div>
    </>
  )
}

export default CartScreens