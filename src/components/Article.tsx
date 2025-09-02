export default function Article({ img, title, description, openModal }: { img: string, title: string, description: string, openModal: Function }) {
  return (
    <a href="#" className='bg-black/20 border border-white/10 backdrop-blur-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
      <img src={img} alt={img} className="w-[300px] h-[150px] object-cover" />
      <div className='p-4'>
        <h2 className='font-bold text-xl text-white'>{title}</h2>
        <p className='text-sm text-white/80 hover:underline truncate w-[200px]' onClick={() => openModal({ title, description, image: img })}>{description}</p>
      </div>
    </a>
  )
}