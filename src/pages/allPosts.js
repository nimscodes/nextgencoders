import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import BlogPreviewCard from '@/components/blog_preview_card/BlogPreviewCard';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get('/api/getPosts')
    .then(res => {
        setPosts(res.data.posts);
    })
}, []);    

  console.log(posts)

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });


  if(posts.length > 0){
    return(
      <div>
        {
          posts.map(post => {
            return <BlogPreviewCard key={post._id} data={post} />
          })
        }
      </div>
    )
  }
}





