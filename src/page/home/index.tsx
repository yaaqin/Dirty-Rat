import React from 'react'
import Navbar from './navbar'
import Slider, { SliderPartner } from './slider'
import Footer from './footer'
import Header from './header'
import About from './about'
import WelcomeSection from './welcomeSection'
import OurServices from './ourServices'
import OwnerList from './ownerList'
import OurProducts from './ourProduct'
import Portfolio from './portofolio'
import GallerySection from './galery'

export default function Home() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-10">
        <Navbar />
        <hr />
      </section>
      <Header />
      {/* <SliderPartner /> */}
      <WelcomeSection />
      <About />
      <GallerySection/>
      <OurServices />
      <OwnerList />
      <Portfolio />
      <OurProducts />
      <Footer />
    </>
  )
}
