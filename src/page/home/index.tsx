import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import WelcomeSection from './welcomeSection'
import OurServices from './ourServices'
import OwnerList from './ownerList'
import StudioSection from './studioSection'
import Sample from '../../assets/img/ownerList/banner2.jpg'
import OurServicesType from './ourServicesType'

export default function Home() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-20">
        <Navbar />
        <hr />
      </section>
      {/* <Header /> */}
      <StudioSection />
      {/* <SliderPartner /> */}
      <WelcomeSection />
      {/* <About /> */}
      {/* <GallerySection/> */}
      {/* <Parallelogram/> */}
      <img src={Sample} className='w-full' />
      <OurServices />
      <OurServicesType />
      <OwnerList />
      {/* <Portfolio />
      <OurProducts /> */}
      <hr />
      <Footer />
    </>
  )
}
