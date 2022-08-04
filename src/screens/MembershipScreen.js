import React, { useState } from 'react'
import Header from '../components/Header'
import '../css/MembershipScreen.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { payMembership } from '../utils/utils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

import { Modal, Alert } from '@mui/material';

const MembershipScreen = () => {

  const [cardNumberInput, setCardNumberInput] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cvcode, setCVCode] = useState('')
  const [cardOwnerName, setCardOwnerName] = useState('')

  const [modal, setOpenModal] = useState(false)

  const [user] = useAuthState(auth)

  const handleSubmit = () =>{

    setOpenModal(true)

    // send a post request to the database and update user doc to a member
    payMembership(user.uid)

    setCardNumberInput('')  
    setCardExpiration('')
    setCVCode('')
    setCardOwnerName('')

  }


  return (
    <>
        <Header isAuth={true} />
        <div className='membershipContainer'>

        <div className='membershipBlock'>
          <div className='membershipTitleContainer'>
            <h1>Membership</h1>
            <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/635/084/9bb.jpg' style={{width: '200px', }} /> 
          </div>
            
          <div className='paymentContainer'>
            
          <Modal open={modal} onClose={()=> setOpenModal(false)} style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <Alert severity='success'>  Thanks for purchasing our membership :)  </Alert>
          </Modal>

          <div className='cardInputContainer'>
            <h2> Card Number  <CreditCardIcon /></h2>
            <input value={cardNumberInput} onChange={e=> setCardNumberInput(e.target.value)}  style={{width: '100%', padding: '5px'}} />

            <div className='expireContainer'>
              <div style={{marginRight: '10px'}}>
                <h3>Card Expiration Date</h3>
                <input  value={cardExpiration} onChange={e=> setCardExpiration(e.target.value)} style={{ padding: '5px'}}/>
              </div>
              <div style={{marginLeft: '20px'}}>
                <h3> CV Code </h3>
                <input value={cvcode} onChange={e=> setCVCode(e.target.value)} style={{ padding: '5px'}}/>
              </div>
            </div>

            <h2>Card Owner Name </h2>
            <input value={cardOwnerName} onChange={e=> setCardOwnerName(e.target.value)} style={{width: '100%', padding: '5px'}} />
          </div>
          </div> 
          <button onClick={handleSubmit} style={{cursor: 'pointer', padding: '5px'}}> Submit </button>
        </div>
        </div>
    </>
  )
}

export default MembershipScreen


