import React, { useState, useContext } from 'react'

import axios from 'axios'

import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom'

import SearchContext from '../SearchContext'

import { auth } from '../firebase'
import { signOut } from "firebase/auth";

const MealInfoHeader = ({ isAuth }) => {
  const { search, setSearch, meals, setMeals } = useContext(SearchContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false);

  const logOut = () =>{
    signOut(auth).then(()=>{
      console.log('signed out')
    })
  }

  return (
  
    <div className='headerContainer'>
        <div className='nameContainer'>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <h2 className='companyName'>fsdfsdffsdrwe</h2>
          </Link>
          <h2 > Recipe</h2>
        </div>
 

        <div className='auth'>
          <EventNoteIcon style={{marginLeft: '20px'}} />
          <Avatar onClick={(e)=> setAnchorEl(e.currentTarget)} style={{marginLeft: '20px', cursor: 'pointer'}}/>
          <Menu  
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={()=> setAnchorEl(null)}
          >
            <MenuItem>
              <p className='menuOptions' onClick={logOut} >Logout <LogoutIcon /> </p>
            </MenuItem>
          </Menu>
        </div>
       
    </div> 
  
  )
}

export default MealInfoHeader