import React, { useEffect, useState, useContext } from 'react'

import Header from '../components/Header'
import PlanSection from '../components/PlanSection'

import { fetchPlans } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import PlanContext from '../PlanContext'
import axios from 'axios'
import { onSnapshot, collection } from 'firebase/firestore'

import CircularProgress from '@mui/material/CircularProgress'

import '../css/PlanScreen.css'

const PlanScreen = () => {
  const [user] = useAuthState(auth)
  const { plans, setPlans } = useContext(PlanContext) 
  const [mealsPlans, setMealsPlans] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
   const unsub = onSnapshot(collection(db, 'plans', user.uid, 'plans'), snapshot=>{
     setPlans(snapshot.docs.map(doc=>(
       doc.data()
     )))
     return unsub
   })

  }, [])



  return (
    <>
    <Header isAuth={true} />
   
    <div className='planScreenContainer'>
        <div className='planTitle'>
          <h1 className='planh1'>Plans</h1>
        </div>
        <div>
            {
            plans.map(meal=>(
                <PlanSection name={meal.name} image={meal.image} mealId={meal.mealId} meal={meal} key={meal.mealId} />
            ))
            }
        </div>
        
        
    </div>
    </>
  )
}

export default PlanScreen