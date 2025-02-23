import Navbar from './navbar'
import Footer from './footer'
import WelcomeSection from './welcomeSection'
import OurServices from './ourServices'
import OwnerList from './ownerList'
import StudioSection from './studioSection'
import Sample from '../../assets/img/ownerList/banner2 (1).jpg'
import OurServicesType from './ourServicesType'

export default function Home() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <hr />
      </section>
      <StudioSection />
      <WelcomeSection />
      <OurServices />
      <OurServicesType />
      <img src={Sample} className='w-full' />
      <OwnerList />
      <hr />
      <Footer />
      {/* <Header /> */}
      {/* <SliderPartner /> */}
      {/* <About /> */}
      {/* <GallerySection/> */}
      {/* <Parallelogram/> */}
      {/* <Portfolio />
      <OurProducts /> */}
    </>
  )
}
