import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

const BlogPreviewCard = (props) => {
    const { data } = props;
    const post = data;

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
                <img src={'../../public/images/user.png'} className='rounded-lg' />
                <div className='text-sm font-light'>{post.author}</div>
                <div className='text-gray-500 text-sm mt-1'>- {formattedDate}</div>
                <span className='text-yellow-500'><AiFillStar /></span>
                <div className='text-sm text-gray-500 font-light'>Member-only</div>
            </div>
            <div id='blog_content' className='w-full flex justify-between px-2 py-2 mb-4'>
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
                    <span className='font-light bg-gray-100 p-1.5 rounded-xl'>{post.category}</span>
                    <span className='font-light text-gray-500'>{readingTime} mins read</span>
                </div>
                <span className='text-gray-500'> <MdFavoriteBorder /> </span>
            </div>
            <hr className="w-full h-[1px] mx-auto my-5 bg-gray-300 border-0 rounded"></hr>
        </div>
    )
}

export default BlogPreviewCard