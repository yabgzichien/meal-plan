import React, { useState } from 'react'
import './App.css';

// components
import Header from './components/Header';

// screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MealInfoScreen from './screens/MealInfoScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchContext from './SearchContext'
import PlanContext from './PlanContext'

// firebase
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])
  const [plans, setPlans] = useState([])

  const [user, loading] = useAuthState(auth)

  return (

    <SearchContext.Provider value={{search, setSearch, meals, setMeals}} >
    <Router>
      {user ? 
      <PlanContext.Provider value={{plans, setPlans}}>
      <Switch>
        <Route path='/info/:id'>
          <MealInfoScreen />
        </Route>
        <Route path='/'>
          <HomeScreen auth={true} />
        </Route>
      </Switch>
      </PlanContext.Provider> :
        <Switch>       
            <Route path='/login'>
              <LoginScreen />
            </Route>
            <Route path='/register'>
              <RegisterScreen />
            </Route>
            <Route path='/'>
              <HomeScreen auth={false} />
            </Route>
          </Switch>

      }

    </Router>
    </SearchContext.Provider>
  );
}

export default App;
