import { useEffect } from "react";
import { useState } from "react";
import Bloge from "./Bloge";

export default function Blogs(props) {
    const [blogs , setBlogs] = useState([]);

    useEffect( () => {
        fetch('data.json')
            .then(res => res.json()) 
            .then(data => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="col-span-1 sm:col-span-2 w-full">
            {blogs.map(blog => <Bloge key={blog.id} blog={blog} handleBookmark={props.handleBookmark} handleReadingTime={props.handleReadingTime}></Bloge>)}
        </div>
    );
}
