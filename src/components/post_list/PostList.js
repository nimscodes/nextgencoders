import React from 'react';
import PostItem from '@/components/post_item/PostItem';


export default function PostList({posts}) {

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      {/* <div id='header' className='w-[80%] mx-auto flex flex-col my-5'>
        <div className='font-light text-lg text-gray-700 tracking-wide px-2'>
          Latest Posts
        </div>
        <hr className='mb-5'></hr>
      </div> */}
      {
        sortedPosts.map(post => {
          return <PostItem key={post._id} post={post} />
        })
      }
    </div>
  )
}





