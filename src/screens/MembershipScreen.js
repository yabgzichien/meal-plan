import React from 'react'
import Header from '../components/Header'
import '../css/MembershipScreen.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const MembershipScreen = () => {
  return (
    <>
        <Header isAuth={true} />
        <div className='membershipContainer'>

        <div className='membershipBlock'>
          <div className='membershipTitleContainer'>
            <h2>We won't steal your card information </h2>
            <h2>We ask politely</h2>
            <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/635/084/9bb.jpg' style={{width: '200px', }} /> 
          </div>
            
          <div className='paymentContainer'>
          <form className='cardInputContainer'>
            <h2> Card Number  <CreditCardIcon /></h2>
            <input   style={{width: '100%', padding: '5px'}} />

            <form className='expireContainer'>
              <div style={{marginRight: '10px'}}>
                <h3>Card Expiration Date</h3>
                <input style={{ padding: '5px'}}/>
              </div>
              <div style={{marginLeft: '20px'}}>
                <h3> CV Code </h3>
                <input  style={{ padding: '5px'}}/>
              </div>
            </form>

            <h2>Card Owner Name </h2>
            <input style={{width: '100%', padding: '5px'}} />
          </form>
          </div> 
        </div>
          
        </div>
    </>
  )
}

export default MembershipScreen


