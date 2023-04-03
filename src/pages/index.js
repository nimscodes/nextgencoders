import NavBar from '@/components/navbar/NavBar';
import PostList from '../components/post_list/PostList';
import React, { useEffect, useState } from 'react';
import Categories from './category/Categories';
import { getAllCategories } from '../../utils/getAllCategories';

export default function Home({categories}) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(`/api/posts/getPosts`);
      const data = await response.json()
      setPosts(data.posts)
    }

    fetchData();
  }, [])
  
  return (
      <main className='w-[90%] mx-auto'>
        <NavBar />
        <Categories categories={categories} />
        <PostList posts={posts}/>
      </main>
  )
}

export async function getServerSideProps(context) {
  // let dev = process.env.NODE_ENV !== 'production';
  // let { DEV_URL, PROD_URL } = process.env;
  
  try {
    // const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts/getPosts`);
    // const { posts } = await res.json();
    const categories = await getAllCategories();

    return { props: { categories } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}



