export default function Header({ scrolled }: { scrolled: boolean }) {
    return (
      <header className={`bg-white z-40 pl-10 transition-all duration-300 ${
        scrolled 
          ? 'fixed top-0 left-0 right-0 h-[7rem] pt-[3rem] bg-white'
          : 'relative h-[6rem] px-8 lg:px-0' // Normal header when not scrolled
      }`}>
        <div className="flex md:flex-col justify-between h-full w-full md:justify-center pr-6 md:pr-2 lg:pr-0">
          <h1 className={`font-bold transition-all duration-300 ${
            scrolled ? 'text-3xl' : 'text-4xl'
          }`}>Inventory</h1>
          <span className="text-gray-700 text-sm w-fullunderline pt-1">Enter zip code</span>
          
        </div>
      </header>
    );
  }