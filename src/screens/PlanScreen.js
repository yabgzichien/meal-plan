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
            plans.length !== 0 ? 
            plans.map(meal=>(
              <PlanSection name={meal.name} image={meal.image} mealId={meal.mealId} meal={meal} key={meal.mealId} />
              )):
              <div className='noPlans'>
                <img src='https://c.tenor.com/dHCK7XkcGzUAAAAC/john-cena.gif' />
                <img src='https://djlunatique.com/wp-content/uploads/2022/01/Website-3-1.jpg' />
                <img  src='https://i.ytimg.com/vi/UshPQkCm1Cw/maxresdefault.jpg' />
                <img src='https://c.tenor.com/GMUBf1Tmaq0AAAAC/china-donald-trump.gif' />
                <img src='https://c.tenor.com/gdqQlkh_C5QAAAAM/ricardo-milos-come-here.gif' />
                <img src='https://i.pinimg.com/originals/c6/25/90/c62590c1756680060e7c38011cd704b5.jpg' />

              </div>
          }
 
        </div>
        
        
    </div>
    </>
  )
}

export default PlanScreen