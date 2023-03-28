import React from 'react';
import { FaCodeBranch, FaSearch } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='w-full p-4 flex flex-col'>
            <div className='flex items-center justify-between' >
                <div className='flex gap-4 items-center'>
                    <div id='logoText' className='flex items-center text-gray-800 cursor-pointer'>
                        <h1 className='font-bold'>NGC</h1>
                        <span className='text-xs'><FaCodeBranch /></span>
                    </div>
                    <form>
                        <div className='relative'>
                            <span className='text-sm absolute inset-y-0 left-0 text-gray-400 flex items-center pl-2 pointer-events-none'><FaSearch /></span>
                            <input className='block w-full py-1 pl-7 text-sm text-gray-900 border border-gray-300 rounded-xs bg-gray-50 focus:border-black-500'
                                type='search'
                                name='search'
                                placeholder='Search NGC...' />
                        </div>

                    </form>
                </div>
                <Link href='/new-post'>
                    <div className='flex items-center gap-2 text-gray-500 cursor-pointer'>
                        <span className='text-lg'> <BsPencilSquare /> </span>
                        <div className='text-sm'>Write</div>
                    </div>
                </Link>
                
            </div>
            <hr className="w-full h-[1px] mx-auto my-4 bg-gray-200 border-0 rounded"></hr>
        </nav>
    )
}

export default NavBar