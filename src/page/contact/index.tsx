import React from 'react'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import MainComponent from './section'

export default function Contact() {
    return (
        <>
            <section className="fixed top-0 left-0 w-full z-20">
                <Navbar />
                <hr />
            </section>
            <MainComponent />
            {/* <section className='relative'>
            <Footer />
            </section> */}
        </>
    )
}
