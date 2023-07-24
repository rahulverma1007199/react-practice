// to fetch data in react use reactQuery
// to fetch data in nextjs use fetch
import React from 'react';
import PostCard from './PostCard';
import {PostProps} from '../../types/types'
async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostList =async () => {
  const data : PostProps[] = await getData();
  // if you use data:PostProps[] in data then you don't have to use -- inside map function -- (post:PostProps) ;
  return (
    <div>
      {/* <PostCard title='post title' body='post desc'/> for static we can set manual title and desc values to be string but what if we are fetching data */}
      {data.map((post) => (
        <PostCard key={post.id} {...post}/>
      ))}
    </div>
  )
}
export default PostList