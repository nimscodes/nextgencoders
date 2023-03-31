import NavBar from '@/components/navbar/NavBar';
import PostList from '../components/post_list/PostList';
import React from 'react';
import Categories from './category/Categories';
import { getAllCategories } from '../../utils/getAllCategories';

export default function Home({posts, categories}) {
  return (
      <main className='w-[90%] mx-auto'>
        <NavBar />
        <Categories categories={categories} />
        <PostList posts={posts}/>
      </main>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch('http://localhost:3000/api/posts/getPosts');
    const { posts } = await res.json();
    const categories = await getAllCategories();

    return { props: { posts, categories } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}



