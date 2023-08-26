import React from 'react'
import './Card.css'

export default function Card({ backdrop_path, title, vote_average, overview, release_date }) {
    const imagepath = 'https://image.tmdb.org/t/p/w1280';
    return (
        <div className="content border-2 border-solid border-white text-white p-2 relative overflow-hidden cursor-pointer font-[Tektur]">
            <div className="object-fit border border-solid border-gray-300 rounded-lg overflow-hidden">
                <img
                    src={imagepath + backdrop_path}
                    alt={title}
                    className=' md:h-[30rem] h-96 object-cover object-center' />
            </div>
            <h1 className="font-bold text-2xl">
                {title}
            </h1>
            <div className='font-bold text-xl py-4 flex justify-between'>
                <div>
                    <span className={`${+vote_average > 5 ? 'text-green-400' : 'text-red-500'} pr-4`}>{vote_average}</span>
                    <img src='../public/star.png' alt="" className='inline-block w-6 h-6 ' />
                </div>
                <div>
                    <h1>Relase Date:    <span className='font-semibold underline '>{release_date}</span></h1> 
                </div>
            </div>
            <div className='overview text-black right-0 break-all absolute top-[40rem] bg-white transition-all ease-in-out p-4 h-full'>
                <h1 className='font-bold text-4xl py-4'>Overview</h1>
                <p className='text-xl font-bold tracking-wide font-[Yatra One]'>{overview}</p>
            </div>
        </div>
    )
}
