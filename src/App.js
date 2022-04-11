import React, { useState } from 'react'
import './App.css';

// components
import Header from './components/Header';

// screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchContext from './SearchContext'

function App() {
  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])

  return (
    <SearchContext.Provider value={{search, setSearch, meals, setMeals}} >
    <Router>
      
      <Switch>       
        <Route path='/login'>
          <LoginScreen />
        </Route>
        <Route path='/register'>
          <RegisterScreen />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
