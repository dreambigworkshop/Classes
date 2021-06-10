import React from 'react'

export default function  ButtonComponent(props){
    const {tag, link} = props
    return (
        <div>
            <button>{tag} | Link: {link}</button>
        </div>
    )
}