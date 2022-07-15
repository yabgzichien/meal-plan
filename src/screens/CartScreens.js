import React, { useContext, useEffect, useState } from 'react'
import CartSection from '../components/CartSection'
import '../css/CartScreen.css'
import Header from '../components/Header'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import CartsContext from '../CartsContext'
import { onSnapshot, collection } from 'firebase/firestore'
import TotalAmount from '../components/TotalAmount'
import { sumTotalPrice } from '../utils/utils'

const CartScreens = () => {
  const [user] = useAuthState(auth)
  const { carts, setCarts } = useContext(CartsContext)

  const [totalPrice, setTotalPrice] = useState()

  useEffect(()=>{

    const unsub = onSnapshot(collection(db, 'carts', user.uid, 'cart'), snapshot=>{
      setCarts(snapshot.docs.map(doc=>(
        doc.data()
      )))

    setTotalPrice(sumTotalPrice(carts))
 
      return unsub
    })
 
   }, [carts])

   
  return (
    <> 
    <Header isAuth={true} />
    <div className='cartScreenContainer'>
      <div className='cartTitle'>
        <h1>Cart</h1>
      </div>

      <div>
        {
          carts.map(cart=>(
            <CartSection key={cart?.name} name={cart?.name} image={cart?.image} price={cart?.price} quantity={cart?.quantity} unit={cart?.unit} ingreId={cart?.ingreId}  />
          ))
        }
      </div>

      <TotalAmount totalPrice={totalPrice} />
    </div>
    </>
  )
}

export default CartScreens