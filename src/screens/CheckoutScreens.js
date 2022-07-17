import React, { useState, useEffect } from 'react'
import '../css/CheckoutScreen.css'
import Header from '../components/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProductsOrderSection from '../components/ProductsOrderSection';
import { onSnapshot, collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { Dialog, Alert } from '@mui/material';

const CheckoutScreens = () => {

  const [user] = useAuthState(auth)

  // const { carts } = useContext(CartsContext)
  const [carts, setCarts] = useState([])

  const [openDialog, setOpenDialog] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState('')

  useEffect(()=>{

    const unsub = onSnapshot(collection(db, 'carts', user.uid, 'cart'), snapshot=>{
      setCarts(snapshot.docs.map(doc=>(
        doc.data()
      )))
 
      return unsub
    })
 
   }, [])


  function findSubtotal(){
    let tempArr = [0, 0]
    carts.forEach(cart => {
      tempArr.push(cart?.price)
    });

    return tempArr.reduce((total, num)=> total + num)
  }
  

  return (
    <>
    <Header isAuth={true} />
    <div className='checkoutScreenContainer'>
        <div className='checkoutSubContainer'>
          <div className='deliveryAddress'>
            <h2 className='locationHeader'> <LocationOnIcon /> Delivery Address</h2>
            <p className='locationDetail'>None  <p className='addLocation' >Add</p> </p>
          </div>

        <div className='productsOrderdContainer deliveryAddress'>
          <div className='variableSection'>
            <h3>Ingredients Ordered</h3>
            <p className='flexcenter'>Unit Price (RM)</p>
            <p className='flexcenter'>Amount</p>
            <p className='flexcenter'>Item Subtotal</p>
          </div>

          {
            carts.map((cart)=>(
              <ProductsOrderSection key={cart?.name} quantity={cart?.quantity} price={cart?.price} image={cart?.image} name={cart?.name} />
            ))
          }

          <div className='paymentMethod'>
            <h3 style={{textAlign: 'center', marginBottom: '15px'}}>Payment Method</h3>
            <div className='paymentMethodSelections'>
              <div onClick={()=> setPaymentMethod('cod')} style={{ backgroundColor: paymentMethod === 'cod' ? 'grey' : 'white' }} >Cash On Delivery</div>
              <div onClick={()=> setPaymentMethod('onlineB')} style={{ backgroundColor: paymentMethod === 'onlineB' ? 'grey' : 'white' }}>Online Banking</div>
              <div onClick={()=> setPaymentMethod('card')} style={{ backgroundColor: paymentMethod === 'card' ? 'grey' : 'white' }}>Credit Card/ Debit Card</div>
              <div onClick={()=> setPaymentMethod('TNG')} style={{ backgroundColor: paymentMethod === 'TNG' ? 'grey' : 'white' }}>TNG E-Wallet</div>
              <div onClick={()=> setPaymentMethod('7-11')} style={{ backgroundColor: paymentMethod === 'cod' ? 'grey' : 'white' }}>Cash Payment at 7-11</div>
            </div>

          </div>
        <div className='deliveryAddress paymentSubtotalContainer'>
          <div className='paymentDetailsContainer'>
           <p>Ingredients Subtotal</p>
           <p>RM{findSubtotal()}</p>
          </div>
          <div className='paymentDetailsContainer'>
           <p>Delivery Fee</p>
           <p>RM 5</p>
          </div>
          <div className='paymentDetailsContainer paymentSubtotal'>
           <p>Subtotal</p>
           <p>RM{findSubtotal() + 5}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div></div>
            <button onClick={()=> setOpenDialog(true)} className='placeOrderBtn'> Place Order </button>
          </div>
          </div>
        </div>
          <Dialog onClose={()=> setOpenDialog(false)} open={openDialog}>
            <Alert severity='success'> The Items has been successfully ordered </Alert>
          </Dialog>
        </div>
    </div>
    </>
  )

}

export default CheckoutScreens