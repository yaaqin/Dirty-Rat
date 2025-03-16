import Navbar from '../home/navbar'
import OurServicesType from '../home/ourServicesType'
import OwnerList from '../home/ownerList'
import Footer from '../home/footer'
import OurService2 from './ourService2'
import OurWork from './ourWork'
import { useLocation } from 'react-router-dom';
import WelcomeSection from '../home/welcomeSection'
import StudioSection from '../home/studioSection'
import { useEffect } from 'react'

export default function Home2() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [useLocation().pathname]);
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <hr className='border-textSecondColor'/>
      </section>
      <StudioSection />
      <WelcomeSection />
      {/* <OurServices /> */}
      {/* <OurServicesType /> */}
      {/* <StudioSection />
      <WelcomeSection />
      <OurServices /> */}
      <OurService2/>
      <OurServicesType />
      {/* <PortofolioArtStation/> */}
      <OurWork/>
      <OwnerList />
      <hr />
      <Footer />
    </>
  )
}
