import React from 'react';
import { FaCodeBranch, FaSearch } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='w-full p-4 flex flex-col'>
            <div className='flex items-center justify-between' >
                <div className='flex gap-4 items-center text-xl'>
                    <Link href='/' id='logoText' className='flex items-center text-gray-800 cursor-pointer'>
                        <h1 className='font-bold'>NGC</h1>
                        <span><FaCodeBranch /></span>
                    </Link>
                    <form>
                        <div className='relative font-light text-lg w-[200px]'>
                            <span className='absolute inset-y-0 left-0 text-gray-400 flex items-center px-3 pointer-events-none'><FaSearch /></span>
                            <input className='text-sm block w-full py-2 pl-10 text-gray-900 border border-gray-50 rounded-2xl bg-gray-50 focus:border-black-500'
                                type='search'
                                name='search'
                                placeholder='Search NGC...' />
                        </div>

                    </form>
                </div>
                <Link href='/new-post'>
                    <div className='flex items-center gap-2 text-gray-500 cursor-pointer'>
                        <span className='text-lg'> <BsPencilSquare /> </span>
                        <div className='text-md font-light'>Write</div>
                    </div>
                </Link>
                
            </div>
            <hr className="w-full mx-auto my-2 bg-gray-100 border-1 rounded"></hr>
        </nav>
    )
}

export default NavBar