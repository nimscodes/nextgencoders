import NavBar from '@/components/navbar/NavBar';
import Posts from './allPosts';
import React from 'react';

export default function Home() {
  return (
      <main className='w-[90%] mx-auto'>
        <NavBar />
        <Posts />
      </main>
  )
}



