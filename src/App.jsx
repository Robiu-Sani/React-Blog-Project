import { useState } from "react";
import AddCard from "./components/addCart/AddCard";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    const newBookmark = [...bookmarks , blog]
    setBookmarks(newBookmark)
    console.log(blog)
  }

  return (
    <div>
      <Header></Header>
      <div className="container p-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <AddCard bookmarks={bookmarks}></AddCard>
      </div>
    </div>
  )
}