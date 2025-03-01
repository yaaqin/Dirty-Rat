import Navbar from '../home/navbar'
import OurServicesType from '../home/ourServicesType'
import PortofolioArtStation from '../home/port0FolioArtStattion'
import OwnerList from '../home/ownerList'
import Footer from '../home/footer'
import OurService2 from './ourService2'

export default function Home2() {
  return (
    <>
      <section className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <hr className='border-textSecondColor'/>
      </section>
      {/* <StudioSection />
      <WelcomeSection />
      <OurServices /> */}
      <OurService2/>
      <OurServicesType />
      {/* <PortofolioArtStation/> */}
      <OwnerList />
      <hr />
      <Footer />
    </>
  )
}
