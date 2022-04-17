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

import { Link, useHistory } from 'react-router-dom'

import SearchContext from '../SearchContext'

import { auth } from '../firebase'
import { signOut } from "firebase/auth";

const Header = ({ isAuth }) => {
  const history = useHistory()
  const { search, setSearch, meals, setMeals } = useContext(SearchContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false);

  const logOut = () =>{
    signOut(auth).then(()=>{
      console.log('signed out')
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const searchMeal = () =>{
    history.push(`/search/${search}`)
    // axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>{
    //   setMeals(res.data.meals)
    // }).catch(err=>{
    //   console.log(err.message)
    // })
  }

  const category = (params) =>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params}`).then(res=>{
      setMeals(res.data.meals)
    }).catch(err=>{
      console.log(err.message)
    })
  }



  return (
    <>
    { isAuth ?
    <div className='headerContainer'>
        <div className='nameContainer'>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <h2 className='companyName'>fsdfsdffsdrwe</h2>
          </Link>
          
          <h2 > Recipe</h2>
        </div>
        <form className='searchContainer'onSubmit={searchMeal} >
          <input className='headerSearchInput' onChange={e=> setSearch(e.target.value)} />
          <SearchIcon onClick={searchMeal} style={{padding: '10px', cursor: 'pointer'}} />
          <FilterAltIcon onClick={handleClickOpen} style={{padding: '10px', cursor: 'pointer'}}/>
        </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Filter By Categories"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='categoriesContainer'>
             <button className='categoryBtn vegan' onClick={()=> category('Vegan')} > Vegan </button>
             <button className='categoryBtn breakfast' onClick={()=> category('Breakfast')}> Breakfast </button>
             <button className='categoryBtn dessert' onClick={()=> category('Dessert')}> Dessert </button>
             <button className='categoryBtn chicken' onClick={()=> category('Chicken')}>Chicken</button>
             <button className='categoryBtn lamb' onClick={()=> category('Lamb')}>Lamb</button>
             <button className='categoryBtn pork' onClick={()=> category('Pork')}>Pork</button>
             <button className='categoryBtn seafood' onClick={()=> category('Seafood')}>Seafood</button>
             <button className='categoryBtn beef' onClick={()=> category('Beef')}>Beef</button>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
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
       
    </div> :
    <div className='headerContainer'>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <h2 className='companyName'>fsdfsdffsdrwe</h2>
          </Link>

        <div className='auth'>
         <h3 className='authBtn'> Login </h3>
         <h3 className='authBtn'>Register</h3>
        </div>
       
    </div>
  }
    </>
  )
}

export default Header