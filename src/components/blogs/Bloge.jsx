import React from 'react';
import { useState } from 'react';

export default function Bloge(props) {
    const [descriptionShow, setDescriptionShow] = useState(false); // Changed initial state to a boolean

    const {handleBookmark , blog} = props
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags, description } = props.blog;

    function handleDescription() {
        setDescriptionShow(!descriptionShow); // Toggle the state directly
    }

    return (
        <div className='w-full p-2 rounded-md bg-gray-200 shadow-md my-4'>
            <img src={cover} alt={`This image is for ${title}`} className="w-full mb-5 rounded-md" />
            <div className="w-full flex justify-between">
                <div className="flex gap-3 items-center">
                    <img src={author_img} alt={`This image is for ${title}`} className="w-14 h-14 rounded-full" />
                    <div>
                        <p className='text-black text-xl font-bold'>{author}</p>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <span onClick={() => handleBookmark(blog)} className='mr-3 cursor-pointer'>{reading_time} minute read <i className="fa-brands ml-3 text-green-500 fa-readme"></i></span>
            </div>
            <h1 className='text-2xl font-bold m-4'>{title}</h1>
            <div className="m-4 flex flex-wrap gap-3">
                {hashtags.map((hash, index) => <p key={index}>#{hash}</p>)} {/* Added key prop */}
            </div>
            <button onClick={handleDescription}>Click To Read The Blog</button>
            {descriptionShow && <p className="m-4">{description}</p>}
        </div>
    );
}
