import React from 'react'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'

export default function ContentComponent() {
    return (
        <div>
            This is Content Component
            <ButtonComponent tag="Content Link" link="facebook"/>
            <ImageComponent/>
        </div>
    )
}
