import React, { useEffect, useState, useContext } from 'react'

import Header from '../components/Header'
import PlanSection from '../components/PlanSection'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import PlanContext from '../PlanContext'
import { onSnapshot, collection } from 'firebase/firestore'

import '../css/PlanScreen.css'

const PlanScreen = () => {
  const [user] = useAuthState(auth)
  const { plans, setPlans } = useContext(PlanContext) 


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
          <h1 className='planh1'>Saves</h1>
        </div>
        <div>
          {
            plans.length !== 0 ? 
            plans.map(meal=>(
              <PlanSection name={meal.name} image={meal.image} mealId={meal.mealId} meal={meal} key={meal.mealId} />
              )):
              <div className='noPlans'>
                

              dysahljk


              </div>
          }
 
        </div>
        
        
    </div>
    </>
  )
}

export default PlanScreen