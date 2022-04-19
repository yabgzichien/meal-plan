import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import '../css/Meals.css'

import { addToPlan } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Alert from '@mui/material/Alert';

const Meals = ({ image, name, mealId }) => {
  
  const [user] = useAuthState(auth)
  const history = useHistory()
  const [openAlert, setOpenAlert] = useState(false)
  const [sending, setSending] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  const viewRecipe = () =>{
    history.push(`/info/${mealId}`)
  }

  const addToMyPlan = async () =>{
    setSending(true)
    await addToPlan(user.uid, { name, image, mealId }).then(()=>{
      setSending(false)
      setOpenAlert(true)
    }).catch(err=>{
      setSending(false)
      setErrMessage(err.message)
    })  
  }

  return (
    
    
    <div className='mealsContainer'>
      <Link to={`/info/${mealId}`} style={{textDecoration: 'none', color: 'black'}}>
        <img src={image} className='mealsImage' />
      </Link>
        <div className='infoContainer'>
         <h2 style={{maxWidth: '300px', textAlign: 'center'}} >{name}</h2>
         <div className='btnContainer'>
            <button className='btn' onClick={addToMyPlan}>Add to Plan</button>
            <button className='btn' onClick={viewRecipe}>View Recipe</button>
         </div>
        </div>
        {openAlert ?
          <Alert severity="success" onClose={() => {setOpenAlert(false)}}>Successfully added to your plan</Alert> : null
        }
        {errMessage ? 
          <Alert severity="error" onClose={() => {setErrMessage('')}}>{errMessage}</Alert>: null
        }
        {sending ? 
           <Alert severity="info" onClose={() => {setSending(false)}}>Adding...</Alert>: null
        }
        
    </div>
    
  )
}

export default Meals