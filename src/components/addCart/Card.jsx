import React from 'react'

export default function Card(props) {
    const { item } = props
  return (
    <div className="w-full flex justify-between items-center rounded-md bg-white p-2">
        <p>{item.title}</p>
        <span>{item.reading_time} m </span>
    </div>
  )
}
