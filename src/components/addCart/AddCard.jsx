import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"

export default function AddCard(props) {
    const {bookmarks, readingTime} = props
    const [readTime, setReadTime] = useState(0)
    const padding = bookmarks.length > 0 ? `p-2` : `p-0`

    useEffect( () => {
        let totalReadTime = 0;
        bookmarks.forEach(item => {
            totalReadTime += item.reading_time;
        });
        setReadTime(totalReadTime);
    },[bookmarks])
  return (
    <div className="w-full my-4">
        <div className="w-full mb-3 rounded-md bg-gray-200 py-4 px-2">
            <p className="text-center">total time {readingTime}</p>
        </div>
        <div className="w-full mb-3 rounded-md bg-gray-200 py-4 px-2">
            <p>You need to read {readTime} m</p>
        </div>
       <div className={`w-full bg-gray-200 flex flex-col gap-2 rounded-md ${padding}`}>
       {bookmarks.map((item, idx) => <Card key={idx} item={item}></Card>)}
       </div>
    </div>
  )
}
