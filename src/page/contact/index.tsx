import { useEffect } from 'react';
import Navbar from '../home/navbar'
import MainComponent from './section'

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
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
