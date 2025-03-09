import videoSrc from '../../../assets/video/Sequence 02.mp4';

export default function WelcomeSection() {
  return (
    <section
      className="bg-primaryColor py-[100px] relative mt-0 md:-mt-24 z-20">
      <section className='absolute w-full top-0 bg-textSecondColor z-40' style={{height: '14%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 15%, 0% 100%)' }}></section>
      <section className='absolute w-full' style={{height: '14%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 15%, 0% 100%)', top: '-0.1rem', backgroundColor: 'black', zIndex: 40}}></section>
      <section className='absolute w-full bg-textSecondColor z-40 bottom-0' style={{height: '14%', clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 85%)' }}></section>
      <section className='absolute w-full bg-primaryColor z-40' style={{height: '14%', clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 85%)', bottom: '-0.1rem'}}></section>
      {/* <section className='absolute w-full h-24 bottom-0 bg-primaryColor z-40'></section> */}
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
      <div className="z-20 absolute top-0 left-0 w-0 h-0 border-l-[30px] bg-green-500 border-r-[30px] border-t-[60px] border-l-transparent border-r-transparent border-t-black"></div>
    </section>
  );
}
