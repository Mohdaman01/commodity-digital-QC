'use client'

import React, { useState } from 'react';

const Capture = () => {

    const [image, setImage] = useState(null);
    const [urls, setUrls] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        if(!image)return;
        data.set('file', image);

        const res = await fetch(`/api/upload`, {
            method: 'POST',
            body: data
        });

        const blob = await res.blob();
    
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });

        setUrls((prevState) => [...prevState, URL.createObjectURL(pdfBlob)]);

    }

    return (
        <section>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='m-1 text-4xl text-gray-400 font-bold text-decoration-line: underline'>Select a Image</h1>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center border-4 p-10 w-96 m-5 rounded-lg'>
                    <input
                        type='file'
                        name='image'
                        accept='image/*'
                        capture
                        onChange={e => setImage(e.target.files[0])}
                        className='border-4 rounded-lg p-2'
                    />
                    <button type='submit' className='border-4 rounded-lg p-2 bg-green-500 text-white mt-8'>
                        submit
                    </button>
                </form>


                <ul className='my-4 border-4 p-4 w-96 m-5 rounded-lg'>
                    {urls.map((url,index) => (
                        <li key={index} className='flex items-center justify-center my-2'>
                            <span>{index+1}</span>
                            <a href={url} download="filename.pdf" className='border-4 rounded-lg p-2 bg-indigo-500 text-white ml-8'>Download PDF</a>
                        </li>
                    ))}
                </ul>


            </div>
        </section>
    )
}


export default Capture;