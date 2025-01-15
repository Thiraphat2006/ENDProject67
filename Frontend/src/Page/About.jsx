import { React, useEffect } from 'react'
import Navbar from '../Component/Navbar/Nav'
import GoToTop from '../Component/Scrolltotop/Scrolltotop'
import Aboutcomponent from '../Component/about/Aboutcomponent'
function About() {
    useEffect(() => {
        document.body.style.backgroundColor = '#f6eceb'
        return () => {
            document.body.style.backgroundColor = 'white'
        }
    }, [])
    return (
        <>
            <Navbar />
            <Aboutcomponent />
            <GoToTop />
        </>
    )
}

export default About