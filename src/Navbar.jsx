import React from 'react'

function Navbar({func}) {
  return (
    <div className='flex justify-between items-center px-1 md:px-8 py-3 bg-black shadow-sm shadow-white sticky z-20 top-0 w-full'>
        <div className="left text-white ">
            <h1 className='font-[Tektur] font-bold text-lg md:text-4xl '>Movies Point</h1>
        </div>
        <div className="right text-white border-2 border-white border-solid px-3 py-1">
                <input type="text" placeholder='Search' className='bg-transparent outline-none border-none' />
                <button  onClick={func}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
  )
}

export default Navbar