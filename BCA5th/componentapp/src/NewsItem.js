import React from 'react'

export default function NewsItem(props) {
    let {news, order} = props
    return (
        <li>{order}. {news}</li>
    )
}
