import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import About from './about'
import WelcomeSection from './welcomeSection'
import OurServices from './ourServices'
import OwnerList from './ownerList'
import Parallelogram from './jaharGenjang'
import StudioSection from './studioSection'

export default function Home() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-20">
        <Navbar />
        <hr />
      </section>
      {/* <Header /> */}
      <StudioSection/>
      {/* <SliderPartner /> */}
      <WelcomeSection />
      <About />
      {/* <GallerySection/> */}
      <Parallelogram/>
      <OurServices />
      <OwnerList />
      {/* <Portfolio />
      <OurProducts /> */}
      <hr/>
      <Footer />
    </>
  )
}
