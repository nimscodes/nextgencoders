import { useState } from 'react';
import Link from 'next/link'
import {GrPrevious, GrNext} from 'react-icons/gr'

function CategoryList({ categories }) {
    const [page, setPage] = useState(0);

    const startIndex = page * 5;
    const endIndex = (page + 1) * 5;

    const handlePrevious = () => {
        setPage(page - 1);
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <div className='w-[80%] p-1 mb-5 mx-auto flex text-center border-b text-gray-800 font-light bg-gray-50 items-center justify-between'>
            <span className='cursor-pointer font-bold text-gray-500' onClick={handlePrevious} disabled={page === 0}>
                <GrPrevious />
            </span>
            <ul className='flex gap-2'>
                {categories.slice(startIndex, endIndex).map((category) => (
                    <Link href={`/category/${category}`}>
                        <li className='cursor-pointer list-none' key={category.toLowerCase()}>| {category}</li>
                    </Link>
                ))}
            </ul>
            <span className='cursor-pointer font-bold text-gray-500' onClick={handleNext} disabled={endIndex >= categories.length}>
                <GrNext />
            </span>
        </div>
    );
}

export default CategoryList;