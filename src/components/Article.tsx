export default function Article({ img, title, description }: { img: string, title: string, description: string }) {
  return (
    <a href="#" className='bg-black/20 border border-white/10 backdrop-blur-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
      <img src={img} alt={img} className="w-[400px] h-[250px] object-cover lg:w-[600px] lg:h-[400px]" />
      <div className='p-4'>
        <h2 className='font-bold text-xl text-white'>{title}</h2>
        <p className='text-sm text-white/80'>{description}</p>
      </div>
    </a>
  )
}