import React, { useContext } from 'react'
import '../css/CheckoutScreen.css'
import Header from '../components/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProductsOrderSection from '../components/ProductsOrderSection';
import CartsContext from '../CartsContext';

const CheckoutScreens = () => {

  const { carts, setCarts } = useContext(CartsContext)

  console.log(carts)

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
              <ProductsOrderSection key={cart?.name} image={cart?.image} name={cart?.name} />
            ))
          }

          <div className='paymentMethod'>
            <h3 style={{textAlign: 'center'}}>Payment Method</h3>
            <div className='paymentMethodSelections'>
              <div>Cash On Delivery</div>
              <div>Online Banking</div>
              <div>Credit Card/ Debit Card</div>
              <div>TNG E-Wallet</div>
              <div>Cash Payment at 7-11</div>
            </div>

          </div>
        <div className='deliveryAddress paymentSubtotalContainer'>
          <div className='paymentDetailsContainer'>
           <p>Ingredients Subtotal</p>
           <p>1</p>
          </div>
          <div className='paymentDetailsContainer'>
           <p>Delivery Fee</p>
           <p>1</p>
          </div>
          <div className='paymentDetailsContainer paymentSubtotal'>
           <p>Subtotal</p>
           <p>2</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div></div>
            <button className='placeOrderBtn'> Place Order </button>
          </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )

}

export default CheckoutScreens