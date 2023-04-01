import { useRouter } from 'next/router'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import Link from 'next/link'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';


const PostItem = ({ post }) => {
    const [showTooltip, setShowTooltip] = useState(false);


    const router = useRouter()
    // const pathName = post.title.toLowerCase().replace(/ /g, '-');
    // console.log(pathName);
    // const encodedTitle = encodeURIComponent(post.title)

    const handleClick = (e) => {
        // Navigate to the post page when the post is clicked
        e.preventDefault();
        router.push(`/post/${post._id}`)
    };

    //formatiing date
    const date = new Date(post.date);
    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);

    //calculating reading time for each blog post
    const wordsPerMinute = 200;
    const contentLength = post.content.split("").length;
    const readingTime = Math.ceil(contentLength / wordsPerMinute);

    return (
        <div id='blog_container' className='flex flex-col w-3/5 mx-auto'>
            <div id='author' className='flex gap-2 items-center py-2 px-2 mb-2'>
                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80'} className='w-[30px] rounded-full' />
                <div className='text-sm font-light'>{post.author}</div>
                <div className='text-gray-500 text-sm mt-1'>- {formattedDate}</div>
                <span className='text-yellow-500'><AiFillStar /></span>
                <div className='text-sm text-gray-500 font-light'>Member-only</div>
            </div>
            <div onClick={handleClick} id='blog_content' className='w-full flex justify-between px-2 py-2 mb-4 cursor-pointer'>
                <div id='blog-text' className='w-3/4 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold tracking-wide'>{post.title}</h1>
                    <p className='font-light text-sm text-justify'>{post.content.substring(0, 99)}...
                    </p>
                </div>
                <div id='blog-image'>
                    <img src='https://source.unsplash.com/random' className='w-[100px] h-[100px]' />
                </div>
            </div>
            <div id='cat_like' className='flex justify-between items-center px-2 py-2'>
                <div className='flex gap-1 items-center text-xs'>
                    <Link href={`/category/${post.category}`} className='font-light bg-gray-100 py-1 px-2 rounded-xl cursor-pointer'>{post.category}</Link>
                    <span className='font-light text-gray-500'>{readingTime} mins read</span>
                </div>
                <span data-tooltip-id='my-tooltip' data-tooltip-content='Add to Favorites' className='text-gray-500 cursor-pointer'> <MdFavoriteBorder /> </span>
                <Tooltip id='my-tooltip' />
            </div>
            <hr className="w-full mx-auto my-5 bg-gray-300 border-1 rounded"></hr>
        </div>
    )
}

export default PostItem