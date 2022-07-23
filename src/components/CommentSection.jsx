import React, { useState, useEffect } from 'react'
import { submitComments, getUserData } from '../utils/utils'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Comment from './Comment'
import { onSnapshot, collection } from 'firebase/firestore'

const CommentSection = ({ itemName }) => {

  const [user] = useAuthState(auth)
  const [userObj, setUserObj] = useState('')

  const [commentsData,  setCommentsData] = useState([])
  const [comment, setComment] = useState('')

  useEffect(()=>{
    getUserData(user.uid).then(res=>{
      setUserObj(res)
    })

    if(itemName){
      const unsub = onSnapshot(collection(db, 'comments', itemName, 'comments'), snapshot=>{

        let arrayData = []
        snapshot.docs.forEach(doc=>{
          arrayData.push({ ...doc.data(), id: doc.id })
        })
        
        setCommentsData(arrayData)

        return unsub
      })
      
    }
    
  }, [itemName])

  console.log(itemName)
  console.log(commentsData)

  const submitComment = async () =>{
    setComment('')
   await submitComments(comment, userObj.profilePicture, userObj.username, itemName)
  }

  return (
    <div className='qnasSectionContainer'>
       <h1>Comments</h1>
       <div className='inputAreaContainer'>
            <textarea value={comment} onChange={e=> setComment(e.target.value)} placeholder='Enter your comment here' className='qnaTextArea' />
            <button onClick={submitComment}  className='submitBtn'> Submit </button>
       </div>
       <div>

        {
          commentsData.map(comment=>(
            <Comment 
              key={comment?.id} 
              comment={comment?.comment} 
              username={comment?.username} 
              pfp={comment?.pfp} timestamp={comment?.time} 
              likes={comment?.likes} d
              dislikes={comment?.dislikes} 
              id={comment?.id} 
              itemName={itemName}
            />
          ))
        }
        
       </div>
    </div>
  )
}

export default CommentSection