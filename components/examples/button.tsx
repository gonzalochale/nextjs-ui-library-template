export default function Button() {
  return (
    <section className="w-full h-full flex max-sm:flex-col justify-center items-center gap-10">
      <button className="relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#282828] to-[#10100F] flex justify-center items-center border-2 border-[#10100F] outline outline-2 outline-offset-2 outline-transparent focus:outline-[#282828]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#1e1e1c] to-[#10100F] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-white/80">Default</span>
      </button>
      <button className="relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#d6d6d6] to-[#F7F7F7] flex justify-center items-center border-2 border-[#F7F7F7] outline outline-2 outline-offset-2 outline-transparent focus:outline-[#c7c7c7]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#e9e9e9] to-[#F7F7F7] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-black/80">Secondary</span>
      </button>
      <button className="group relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#d4ffe5] to-[#3fe581] flex justify-center items-center border-2 border-[#3fe581]  outline outline-2 outline-offset-2 outline-transparent focus:outline-[#d4ffe5]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#8effbb] to-[#3fe581] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-[#0C5132]">Success</span>
      </button>
      <button className="group relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#FED3D1] to-[#ff8682] flex justify-center items-center border-2 border-[#ff8682]  outline outline-2 outline-offset-2 outline-transparent focus:outline-[#FED3D1]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#feb8b4] to-[#ff8682] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-[#8D1F0B]">Destructive</span>
      </button>
    </section>
  );
}