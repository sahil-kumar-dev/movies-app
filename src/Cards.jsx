import { useState, React, useEffect } from 'react'
import Card from './Card'
import Navbar from './Navbar';

function Cards() {
    let [pageNumber, setpageNumber] = useState(1);
    const [serachValue, setserchValue] = useState('');
    const api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dd324dd81985c5062efc81ad32ea904e&page=${pageNumber}`;
    const serchApi=`https://api.themoviedb.org/3/search/movie?query=${serachValue}&api_key=dd324dd81985c5062efc81ad32ea904e`
    const [loadApi, setloadApi] = useState(api)
    let [MoviesArray, setMoviesArray] = useState([]);
    const [isLoading, setisLoading] = useState(true);


    function search(){
        setserchValue('thor');
        setloadApi(serchApi);
        console.log(loadApi);
        console.log(serachValue);
    }

    function next() {
        setpageNumber(pageNumber + 1);
        setisLoading(true);
        window.scroll(0, 0);
    }

    function prev() {
        if (pageNumber > 1) {
            setpageNumber(pageNumber - 1);
            setisLoading(true);
            window.scroll(0, 0);
        }
    }

    useEffect(() => {
        getMovies(loadApi);
        async function getMovies(api) {
            const res = await fetch(api);
            const data = await res.json();
            setMoviesArray(data.results);
            setisLoading(false);
        }

    }, [pageNumber],[loadApi])

    return (
        <>
            <Navbar func={search}/>
            <div className={`${isLoading ? 'block' : 'grid'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-black`}>
                {isLoading ?
                    (<div
                        className="flex items-center justify-center h-screen w-full">
                        <h1 className='font-bold text-4xl text-white'>Loading...</h1>
                    </div>)

                    :
                    MoviesArray.map((arr, index) => (
                        <Card key={index} {...arr} />
                    ))
                }
            </div>
            <div className="bg-black text-white flex item-center justify-around px-5 py-8">
                <button
                    disabled={pageNumber <= 1 ? true : false}
                    onClick={prev}
                    className='px-4 py-1 border-2 border-solid border-white bg-violet-500 disabled:bg-gray-500 font-bold text-black rounded-2xl'>
                    Prev
                </button>
                <button
                    className='px-4 py-1 border-2 border-solid border-white bg-violet-500 disabled:bg-gray-500 disabled:cursor-not-allowed font-bold text-black rounded-2xl'
                    onClick={next}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Cards