import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { likeComment } from '../utils/utils';

const Comment = ({ comment, username, pfp, timestamp, likes, dislikes, id, itemName }) => {

  const [like, setLike] = useState(false)

  const [dislike, setDislike] = useState(false)

  async function likefn (){
    if(!like && dislike){
      setLike(true)
      setDislike(false)
      await likeComment(id, itemName, likes)
      await likeComment(id, itemName, dislikes, -1, 'dislike')
    }else if(like){
      setLike(false)
      await likeComment(id, itemName, likes, -1)
    } else{
      setLike(true)
      await likeComment(id, itemName, likes)
    }
    

  }
console.log(dislikes)
  function dislikefn(){
    if(like && !dislike){
      setLike(false)
      setDislike(true)
      likeComment(id, itemName, dislikes, 1, 'dislike')
      likeComment(id, itemName, likes, -1)
    }else if(dislike){
      setDislike(false)
      likeComment(id, itemName, dislikes, -1, 'dislike')
    } 
    else{
      setDislike(true)
      likeComment(id, itemName, dislikes, 1, 'dislike')
    } 
  }

  const d = new Date(timestamp?.seconds * 1000)


  return (
    <div className='commentContainer'>
        <Avatar src={pfp}  />
        <div className='commentMsgContainer'>
          <p className='commentUsername'>{username}</p>
          <div className='commentInfoContainer'>
            <p>{comment}</p>
            <p>{d.toLocaleString()}</p>
          </div>
          <div className='likeContainer'>
            {
              like ? 
              <div className='likeInfoContainer'>
                <ThumbUpIcon onClick={likefn} style={{cursor: 'pointer'}} />
                {likes}
              </div>
              :
              <div  className='likeInfoContainer'>
                <ThumbUpOffAltIcon onClick={likefn}  style={{cursor: 'pointer'}}/>
                {likes}
              </div>
            }

            {
              dislike ? 
              <div className='likeInfoContainer'>
                <ThumbDownIcon onClick={dislikefn} style={{cursor: 'pointer'}}/>
                {dislikes}
              </div>:

              <div className='likeInfoContainer'>
                <ThumbDownOffAltIcon onClick={dislikefn} style={{cursor: 'pointer'}} />
                {dislikes}
              </div>
            }

  
          </div>
        </div>
    </div>
  )
}

export default Comment