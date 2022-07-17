import React, { useState, useEffect } from 'react'
import { submitComments, getUserData } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Comment from './Comment'

const CommentSection = ({ itemName }) => {

  const [user] = useAuthState(auth)
  const [userObj, setUserObj] = useState('')

  useEffect(()=>{
    getUserData(user.uid).then(res=>{
      setUserObj(res)
    })
  }, [])

  const [comment, setComment] = useState('')

  const submitComment = () =>{
    submitComments(comment, userObj.profilePicture, userObj.username, itemName)
  }

  return (
    <div className='qnasSectionContainer'>
       <h1>Comments</h1>
       <div className='inputAreaContainer'>
            <textarea value={comment} onChange={e=> setComment(e.target.value)} placeholder='Enter your questions here' className='qnaTextArea' />
            <button onClick={submitComment}  className='submitBtn'> Submit </button>
       </div>
       <div>

          <Comment />
        
       </div>
    </div>
  )
}

export default CommentSection