import React from 'react'
import { CircularProgress } from '@mui/material'

const LoadingScreen = () => {
  return (
    <div className='loadingScreenContainer'>
        <CircularProgress />
    </div>
  )
}

export default LoadingScreen