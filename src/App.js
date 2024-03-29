import React, { useState } from 'react'
import './App.css';

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
import MembershipScreen from './screens/MembershipScreen'
import CheckoutScreens from './screens/CheckoutScreens'

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

import Footer from './components/Footer'

import { ParallaxProvider } from 'react-scroll-parallax';
import CartScreens from './screens/CartScreens';
import CartsContext from './CartsContext';
import SideBar from './components/SideBar';
import AllIngredientsScreen from './screens/AllIngredientsScreen';
import AllMealsScreen from './screens/AllMealsScreen';
import Profile from './screens/Profile';
import LoadingScreen from './screens/LoadingScreen';

function App() {
  //const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])
  const [plans, setPlans] = useState([])

  const [carts, setCarts] = useState([])

  const [popularIngre, setPopularIngre] = useState([])
  const [countriesName, setCountriesName] = useState([])
  const [userObj, setUserObj] = useState({})

  const [randomIngredient, setRandomIngredient] = useState([])

  const [user, loading] = useAuthState(auth)

  const [ingredients, setIngredients] = useState([])

  const searchContextValue = {
    meals, setMeals, randomIngredient, setRandomIngredient, popularIngre, setPopularIngre, ingredients, setIngredients,
    countriesName, setCountriesName
  }

  return (
    <ParallaxProvider>
    <>{ loading ? <LoadingScreen /> :
    <SearchContext.Provider value={searchContextValue} >
      <UserContext.Provider value={{userObj, setUserObj}}>
    <Router>
      {user ? 
      <>
      <SideBar />

      <div style={{marginLeft:'5rem'}}>

        <PlanContext.Provider value={{plans, setPlans}}>
        <CartsContext.Provider value={{carts, setCarts}} >
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/allmeals'>
            <AllMealsScreen />
          </Route>
          <Route path='/allingredients'>
            <AllIngredientsScreen />
          </Route>
          <Route path='/checkout'>
            <CheckoutScreens />
          </Route>
          <Route path='/cart'>
            <CartScreens />
          </Route>
          <Route path='/membership'>
            <MembershipScreen />
          </Route>
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
        </CartsContext.Provider>
        </PlanContext.Provider>
      </div>
      </>
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

    <Footer />
    </Router>
    </UserContext.Provider>
    </SearchContext.Provider>
    }
    </>
    </ParallaxProvider>
  );
}

export default App;
