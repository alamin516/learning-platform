import React from 'react';
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4'>404</h1>
            <p className='uppercase text-2xl font-bold'>Opps! Page Not Found</p>
            <button className='mt-6 bg-[#1da1f2] px-5 py-2 rounded-md font-bold text-white'>
                <Link to='/'>Return Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;