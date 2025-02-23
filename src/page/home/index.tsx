import Navbar from './navbar'
import Footer from './footer'
import WelcomeSection from './welcomeSection'
import OurServices from './ourServices'
import OwnerList from './ownerList'
import StudioSection from './studioSection'
import OurServicesType from './ourServicesType'
import PortofolioArtStation from './port0FolioArtStattion'

export default function Home() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <hr className='border-textSecondColor'/>
      </section>
      <StudioSection />
      <WelcomeSection />
      <OurServices />
      <OurServicesType />
      <PortofolioArtStation/>
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
