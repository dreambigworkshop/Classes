import React from 'react'
import NewsItem from './NewsItem'

export default function News(props) {
  let {title} = props 
    return (
        <div className="news">
          <h1>
            {title}
          </h1>
        <ul>
          <NewsItem news="This is a good news" order={1}/>
          <NewsItem news="This is a great news" order={2}/>
          <NewsItem news="This is a great good news" order={3}/>
          <NewsItem news="This is a great great good news" order={4}/>
        </ul>
      </div>
    )
}
