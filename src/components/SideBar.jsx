import React from 'react'
import '../css/SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import EggIcon from '@mui/icons-material/Egg';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { useHistory } from 'react-router-dom';

const SideBar = () => {

  const history = useHistory()

  return (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo" >
        <a  className="nav-link" onClick={()=> history.push('/')} style={{cursor: 'pointer'}}>
          <span className="link-text logo-text">Kithcen Delight</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li className="nav-item">
        <a onClick={()=> history.push('/profile')} className="nav-link">
        <AccountCircleIcon style={icons} />
        <span className="link-text">Profile</span>
        </a>
      </li>

      <li className="nav-item">
        <a onClick={()=> history.push('/membership')} className="nav-link">
          <LoyaltyIcon style={icons} />
          <span className="link-text">Membership</span>
        </a>
      </li>

      <li className="nav-item">
        <a onClick={()=> history.push('/allingredients')} className="nav-link">
            <EggIcon style={icons} />
          <span className="link-text">All Ingrdients</span>
        </a>
      </li>

      <li className="nav-item">
        <a onClick={() => history.push('/allmeals')} className="nav-link">
            <RamenDiningIcon style={icons} />
          <span className="link-text">All Meals</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="https://www.themealdb.com/api.php" target="_blank" className="nav-link">
            <img src='https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png' style={{width: '80px'}} />
          <span className="link-text">The MealsDB</span>
        </a>
      </li>
    </ ul>
  </nav>
  )
}

export default SideBar

const icons ={ 
    fontSize: '100px',
    
}