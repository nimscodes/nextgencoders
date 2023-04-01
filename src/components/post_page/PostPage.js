import NavBar from "../navbar/NavBar";
import { AiFillStar } from 'react-icons/ai'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiShare2 } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import Link from "next/link";


function PostPage({ post }) {

    //formatiing date
    const date = new Date(post.date);
    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);

    //calculating reading time for each blog post
    const wordsPerMinute = 200;
    const contentLength = post.content.split("").length;
    const readingTime = Math.ceil(contentLength / wordsPerMinute);


    return (
        <div className='w-[90%] mx-auto'>
            <NavBar />
            <div className="w-3/5 mx-auto flex flex-col myt-3 px-5 py-3">
                <div id="author-section" className="flex items-center justify-between mb-5">
                    <div id="image-text" className="flex items-center gap-4">
                        <div id="image">
                            <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80' className='w-[50px] rounded-full' />
                        </div>
                        <div id='text' className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-sm">
                                <div id="top-text" className="font-light text-black">
                                    {post.author}
                                </div>
                                <span className="text-xs text-gray-500">in</span>
                                <Link href={`/category/${post.category}`} className='font-light text-xs bg-gray-100 py-.5 px-2 rounded-xl cursor-pointer'>{post.category}</Link>
                            </div>

                            <div id='bottom-text' className="flex gap-1 font-light text-sm text-gray-500 items-center">
                                <span>{formattedDate}</span>
                                <span>- {readingTime} min read -</span>
                                <span className="text-yellow-500 text-lg"><AiFillStar /></span>
                                <span>Member-only -</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 items-center">
                        <div id='icons' className="flex gap-4 text-lg text-gray-400">
                            <span className='my-icon-element' data-tooltip-content="Share on Twitter"><FaTwitter /></span>
                            <span className='my-icon-element' data-tooltip-content="Share on Facebook"><FaFacebook /></span>
                            <span className='my-icon-element' data-tooltip-content="Share on LinkedIn"><FaLinkedin /></span>
                            <span className='my-icon-element' data-tooltip-content="Copy Link"><FiShare2 /></span>
                        </div>
                        <span className="text-lg text-gray-500 my-icon-element" data-tooltip-content="Add to Favorites"><MdFavoriteBorder /></span>
                        <Tooltip anchorSelect=".my-icon-element" />
                    </div>
                </div>
                <div id="title" className="my-3 text-3xl font-extrabold text-gray-800">
                    {post.title}
                </div>
                <div className="w-full my-3">
                    <img src='https://source.unsplash.com/random' className='w-full h-[400px] object-cover' />
                </div>
                <div className="text-center font-normal text-gray-500 mb-10">Photo from <span className="underline">Unsplash</span></div>
                <div className="font-light text-justify">
                    {post.content}
                </div>
            </div>
        </div>
    );
}

export default PostPage;