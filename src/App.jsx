import { useState } from "react";
import AddCard from "./components/addCart/AddCard";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = blog => {
    const isAlreadyBookmarked = bookmarks.some(bookmark => bookmark.id === blog.id);
    const newBookmarks = isAlreadyBookmarked ? bookmarks: [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (id, time) => {
    const newBookmarkRead = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarkRead)

    let totalUserRead = readingTime + time
    setReadingTime(totalUserRead)
  }

  return (
    <div>
      <Header></Header>
      <div className="container p-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <AddCard bookmarks={bookmarks} readingTime={readingTime}></AddCard>
      </div>
    </div>
  )
}