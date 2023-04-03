import { useState } from 'react';
import axios from 'axios';
import { FaCodeBranch } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link'


function NewPost() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: '',
        category: '',
    });

    const router = useRouter();


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/posts/createPost', formData)
            .then(function (response) {
                console.log(response);
                setFormData({
                    title: '',
                    author: '',
                    content: '',
                    category: '',
                })
                router.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });


    };


    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="w-[85%] mx-auto bg-white min-h-screen">
            <NavBar handleSubmit={handleSubmit} />
            <div className="max-w-3xl mx-auto">
                <form id='form1' onSubmit={handleSubmit} className="px-2 py-2 animate__animated animate__fadeIn">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full text-gray-800 font-light text-xl focus:outline-none transition-colors duration-300 border-b-1 border-gray-300"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="author"
                            name="author"
                            className="w-full text-gray-800 font-light text-lg focus:outline-none transition-colors duration-300 border-b-1 border-gray-300"
                            placeholder="Name"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="w-full text-gray-800 font-light text-md focus:outline-none transition-colors duration-300 border-b-1 border-gray-300"
                            placeholder="Category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="content"
                            name="content"
                            className="w-full text-gray-800 font-light text-sm focus:outline-none transition-colors duration-300 border-b-1 border-gray-300"
                            rows="10"
                            placeholder="Tell your story..."
                            value={formData.content}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewPost;


const NavBar = ({ handleSubmit }) => {
    return (
        <nav className='w-full p-4 flex flex-col'>
            <div className='flex items-center justify-between' >
                <div className='flex gap-4 items-center text-xl'>
                    <Link href='/' id='logoText' className='flex items-center text-gray-800 cursor-pointer'>
                        <h1 className='font-bold'>NGC</h1>
                        <span><FaCodeBranch /></span>
                    </Link>
                    <div className='font-light text-sm'>Draft in User</div>
                </div>
                <input value='Publish' type='button' onClick={handleSubmit} form='form1' className='bg-green-600 text-sm text-white font-light py-0.5 px-2.5 rounded-xl cursor-pointer' />
            </div>
            <hr className="w-full mx-auto my-2 bg-gray-200 border-1 rounded"></hr>
        </nav>
    )
}