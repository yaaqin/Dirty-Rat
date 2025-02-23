import Sample from '../../../assets/img/ownerList/banner2 (1).jpg'
import art from '../../../assets/ArtStation-logo-horizontal-dark.svg'

export default function PortofolioArtStation() {
    return (
        <section className='relative bg-primaryColor'>
            <img src={Sample} className='w-full' />
            <section className='w-full absolute bottom-12 flex justify-center'>
                <img src={art} className='w-48 cursor-pointer rounded hover:scale-110' />
            </section>
        </section>
    )
}
