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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login'>
          <LoginScreen />
        </Route>
      </Switch>
      <Switch>
        <Route path='/register'>
          <RegisterScreen />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
