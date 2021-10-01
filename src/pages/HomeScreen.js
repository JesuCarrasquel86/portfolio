import React, {  Suspense } from 'react'
import { HomeAbout } from '../components/Home/HomeAbout'
import { HomeProjects } from '../components/Home/HomeProjects'

export const HomeScreen = () => {
    return (
        <Suspense fallback={<h1>Wait...</h1>}>
        <div className="wrap">
            <div id="bl-main" className="bl-main">
                <HomeAbout />
                <HomeProjects />
            </div>
        </div>
        </Suspense>
    )
}
