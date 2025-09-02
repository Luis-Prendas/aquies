import videoBackGround from './assets/banner-aqui-es.mp4'
import img1 from './assets/img-1.webp'
import img2 from './assets/img-2.webp'
import img3 from './assets/img-3.webp'
import img4 from './assets/img-4.webp'
import aquiesLogo from './assets/aquies.jpg'
import Article from './components/Article'

function App() {
  return (
    <>
      <main className='flex justify-center items-center w-screen min-h-screen relative bg-black'>
        <img src={aquiesLogo} alt="Aquies Logo" className='absolute top-4 left-4 w-32 h-32 object-contain rounded-lg z-20 opacity-40 cursor-pointer hover:opacity-100 hover:scale-105 transition-all duration-300' />
        <video
          src={videoBackGround}
          autoPlay
          loop
          muted
          playsInline
          className='fixed top-0 left-0 w-screen h-screen object-cover opacity-20'
        />
        <section className='flex justify-center items-center z-10 flex-wrap gap-12 w-full h-full p-4 lg:px-[300px]'>
          <Article img={img1} title="Image 1" description="Description for image 1" />
          <Article img={img2} title="Image 2" description="Description for image 2" />
          <Article img={img3} title="Image 3" description="Description for image 3" />
          <Article img={img4} title="Image 4" description="Description for image 4" />
        </section>
      </main>
    </>
  )
}

export default App
