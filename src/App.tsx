import videoBackGround from './assets/banner-aqui-es.mp4'
import img1 from './assets/img-1.webp'
import img2 from './assets/img-2.webp'
import img3 from './assets/img-3.webp'
import img4 from './assets/img-4.webp'
import aquiesLogo from './assets/aquies.jpg'
import Article from './components/Article'
import { useState } from 'react'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{ title: string, description: string, image: string } | null>(null)

  const handleOpenModal = ({ title, description, image }: { title: string, description: string, image: string }) => {
    setModalContent({ title, description, image })
    setOpen(true)
  }

  return (
    <>
      {open && modalContent && (
        <Modal
          image={modalContent.image}
          open={open}
          setOpen={setOpen}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}
      <main className='flex justify-center items-center w-screen min-h-screen relative bg-black'>
        <img src={aquiesLogo} alt="Aquies Logo" className='absolute top-4 left-4 w-32 object-contain rounded-lg z-20 opacity-40 cursor-pointer hover:opacity-100 hover:scale-105 transition-all duration-300' />
        <video
          src={videoBackGround}
          autoPlay
          loop
          muted
          playsInline
          className='fixed top-0 left-0 w-screen h-screen object-cover opacity-70'
        />
        <section className='flex justify-center items-center z-10 flex-wrap gap-12 w-full h-full pb-40'>
          <Article openModal={handleOpenModal} img={img1} title="Image 1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
          <Article openModal={handleOpenModal} img={img2} title="Image 2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
          <Article openModal={handleOpenModal} img={img3} title="Image 3" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
          <Article openModal={handleOpenModal} img={img4} title="Image 4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </section>
      </main>
    </>
  )
}

export default App
