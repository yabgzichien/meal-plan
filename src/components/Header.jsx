import React, { useState, useContext, useEffect } from 'react'

import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
import Badge from '@mui/material/Badge';

import { Link, useHistory } from 'react-router-dom'

import UserContext from '../UserContext'

import { auth, db } from '../firebase'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserData } from '../utils/utils';
import { onSnapshot, collection } from 'firebase/firestore';

const Header = ({ isAuth }) => {
  const history = useHistory()
  const [plans, setPlans] = useState([])
  const [user] = useAuthState(auth)

  const [search, setSearch] = useState('')

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false);

  
  const { userObj, setUserObj } = useContext(UserContext)
  

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
  }

  const category = (params) =>{
    history.push(`/category/${params}`)
  }


  useEffect(()=>{
    if(user){
      const unsub = onSnapshot(collection(db, 'plans', user.uid, 'plans'), snapshot=>{
        setPlans(snapshot.docs.map(doc=>(
          doc.data()
        )))
      
      })

      getUserData(user.uid).then(res=>{
        setUserObj(res)
      }).catch(err=>{
        console.log(err.message)
      })

      return unsub
   }
 
  }, [])


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
        </DialogActions>
      </Dialog>
        <div className='auth'>
          {plans?.length === 0 ?
          <Link to='/plan' style={{textDecoration: 'none', color: 'black'}}>
            <EventNoteIcon style={{marginLeft: '20px'}} />
          </Link>:
          <Badge badgeContent={plans?.length} color="primary">
            <Link to='/plan' style={{textDecoration: 'none', color: 'black'}}>
              <EventNoteIcon style={{marginLeft: '20px'}} />
            </Link>
          </Badge>
          }

          { userObj !== {} ?
           <Avatar onClick={(e)=> setAnchorEl(e.currentTarget)} style={{marginLeft: '20px', cursor: 'pointer'}} src={userObj.profilePicture} /> :
            <Avatar onClick={(e)=> setAnchorEl(e.currentTarget)} style={{marginLeft: '20px', cursor: 'pointer'}}/>
          }

          
          <Menu  
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={()=> setAnchorEl(null)}
          >
            <MenuItem style={{display: 'flex', flexDirection: 'column'}}>
              <p className='menuOptions' onClick={logOut} >Logout <LogoutIcon /> </p>
            </MenuItem>
            <MenuItem>
            <p className='menuOptions' onClick={()=> history.push('/hjkhjk')} >Click me pls </p>
            </MenuItem>

          </Menu>
        </div>
       
    </div> :
    <div className='headerContainer'>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <h2 className='companyName'>fsdfsdffsdrwe</h2>
          </Link>

        <div className='auth'>
          <div className='authBtnContainer'>
            <h3 className='authBtn' onClick={()=> history.push('/login')}> Login </h3>
            <h3 className='authBtn'  onClick={()=> history.push('/register')}>Register</h3>
          </div>
       

        </div>
       
    </div>
  }
    </>
  )
}

export default Header