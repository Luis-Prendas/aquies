import type { Dispatch } from "react";

export default function Modal({ setOpen, title, description, image }: { open: boolean, setOpen: Dispatch<boolean>, title: string, description: string, image: string }) {
  return (
    <main className="w-screen h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-xs flex justify-center items-center z-30 pb-40" onClick={() => setOpen(false)}>
      
      <section className="bg-white/80 rounded-lg w-[500px] flex flex-col gap-4 overflow-hidden border border-white/10">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="font-bold text-xl px-4">
          {title}
        </div>
        <div className="px-4 pb-4 text-black/80 font-light">
          {description}
        </div>
      </section>

    </main>
  )
}