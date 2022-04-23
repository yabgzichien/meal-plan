import React, { useState } from 'react'
import './App.css';

// components
import Header from './components/Header';

// screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MealInfoScreen from './screens/MealInfoScreen'
import IngreSearchScreen from './screens/IngreSearchScreen'
import CountrySearchScreen from './screens/CountrySearchScreen'
import AlphabetSearchScreen from './screens/AlphabetSearchScreen';
import SearchScreen from './screens/SearchScreen';
import CategorySearchScreen from './screens/CategorySearchScreen'
import PlanScreen from './screens/PlanScreen';
import EastherScreen from './screens/EastherScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchContext from './SearchContext'
import PlanContext from './PlanContext'
import UserContext from './UserContext';

import CircularProgress from '@mui/material/CircularProgress';

// firebase
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  //const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])
  const [plans, setPlans] = useState([])
  const [popularIngre, setPopularIngre] = useState([])
  const [countriesName, setCountriesName] = useState([])
  const [userObj, setUserObj] = useState({})

  const [randomIngredient, setRandomIngredient] = useState([])

  const [user, loading] = useAuthState(auth)

  const searchContextValue = {
    meals, setMeals, randomIngredient, setRandomIngredient, popularIngre, setPopularIngre,
    countriesName, setCountriesName
  }

  return (
    <>{ loading ? <CircularProgress /> :
    <SearchContext.Provider value={searchContextValue} >
      <UserContext.Provider value={{userObj, setUserObj}}>
    <Router>
      {user ? 
      
      <PlanContext.Provider value={{plans, setPlans}}>
      
      <Switch>
        <Route path='/hjkhjk'>
          <EastherScreen />
        </Route>
        <Route path='/plan'>
          <PlanScreen />
        </Route>
        <Route path='/category/:search'>
          <CategorySearchScreen />
        </Route>
        <Route path='/search/:search'>
          <SearchScreen />
        </Route>
        <Route path='/info/:id'>
          <MealInfoScreen />
        </Route>
        <Route path='/ingredients/:ingre'>
          <IngreSearchScreen />
        </Route>
        <Route path='/countries/:country' > 
          <CountrySearchScreen />
        </Route>
        <Route path='/alphabet/:char'>
          <AlphabetSearchScreen />
        </Route>
        <Route path='/'>
          <HomeScreen auth={true} />
        </Route>
      </Switch>
      </PlanContext.Provider>
       :
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
    </UserContext.Provider>
    </SearchContext.Provider>
    }
    </>
  );
}

export default App;
