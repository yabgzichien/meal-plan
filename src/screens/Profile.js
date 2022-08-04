import React, { useContext } from 'react'
import Header from '../components/Header'
import '../css/Profile.css'
import UserContext from '../UserContext'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {

  const { userObj, setUserObj } = useContext(UserContext)

  console.log(userObj)

  return (
    <>
      <Header isAuth={true} />

      <div className='profileMainContainer'>

        <div className='profileContainer'>
          <div className='profileInfoContainer'>
            <img src={userObj.profilePicture} className='pfpImg' />
            <h3 className='profileUsername'  > {userObj.username} <EditIcon style={{cursor: 'pointer'}} />  </h3>
            {
              userObj?.member ? 

              <div style={{display: 'flex', alignItems: 'center'}}> member  <LoyaltyIcon /> </div> : <div> not a member </div>
            
            }
          </div>
        </div>
        
      </div>
    
    </>
  )
}

export default Profile