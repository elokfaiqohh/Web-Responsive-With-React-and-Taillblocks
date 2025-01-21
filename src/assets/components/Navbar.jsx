import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
    console.log("click"); 
  };
// buatkan ketika di klik nav nya disembunyikan, ketika di klik lagi muncul pakai let bukan return

  let menuActive = show ? "right-[-100%]" : "right-0";

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto justify-between flex flex-wrap p-5 flex-row md:flex-row">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className={`px-8 py-6 flex flex-wrap text-base justify-center flex-col sm:right-0 gap-8 items-start bg-gray-800
          md:bg-transparent md:static md:gap-0 md:flex-row md:w-auto md:h-full md:translate-y-0 right-0 top-1/2 fixed md:items-center transition-all`}>
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-5 focus:outline-none md:right-0 hover:bg-gray-700 rounded text-base mt-[15px] mb-[15px]" onClick={handleClick}>Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar