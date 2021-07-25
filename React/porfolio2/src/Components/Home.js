import React from 'react'
import EducationComponent from './EducationComponent'
import ProfileComponent from './ProfileComponent'
import SkillComponent from './SkillComponent'

export default function Home() {
    return (
        <div className="main">
            <ProfileComponent />
            <EducationComponent />
            <SkillComponent />
        </div>
    )
}
