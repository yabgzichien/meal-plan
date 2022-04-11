import React, { useState } from 'react'

import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Header = ({ auth }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    { auth ?
    <div className='headerContainer'>
        <div className='nameContainer'>
          <h2 className='companyName'>fsdfsdffsdrwe</h2>
          <h2 > Recipe</h2>
        </div>
        <form className='searchContainer'>
          <input className='headerSearchInput' />
          <SearchIcon style={{padding: '10px', cursor: 'pointer'}} />
          <FilterAltIcon onClick={handleClickOpen} style={{padding: '10px', cursor: 'pointer'}}/>
        </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Filter By"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             <button> Vegan </button>
             <button>  </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
        <div className='auth'>
         <h3 className='authBtn'> </h3>
         <h3 className='authBtn'></h3>
        </div>
       
    </div> :
    <div className='headerContainer'>
        <h2 className='companyName'> MealPlan</h2>

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