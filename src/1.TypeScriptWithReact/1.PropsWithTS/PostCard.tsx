import React from 'react'
import { PostProps } from '../../types/types'

// if you just pass (props) like normal js -- then it shows error saying missing type
const PostCard = (props : PostProps) => {
    // to destucture your props ({title,body}:PostProps).
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard