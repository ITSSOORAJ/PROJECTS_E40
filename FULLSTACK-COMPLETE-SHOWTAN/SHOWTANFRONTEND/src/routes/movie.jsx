import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
export async function loader({params}) {
    const response = await axios.get(`http://localhost:3000/movies/${params.movieId}`);
    console.log(params.movieId)
    const movie = response.data
    
    return {movie};
  }

function Movie(props)
    {
        const  {movie}= useLoaderData()
        return(
            <main className='container px-4 mx-auto'>
               <section className='py-20 grid grid-cols-2   '>
                <img className=' shadow-lg shadow-cyan-500/50 h-29' src ={movie.thumbnail} alt="" />
                <div className='flex flex-col justify-center md:text-center sm:text-center' >
                    <h2 className='text-2xl font-bold mb-4 sm pl-50'>{movie.title}</h2>
                    <span className='text-lg'>
                      {movie.genere.title}
                    </span>
                    <p className='md:text-center sm:text-center italic ml-7'>{movie.description}</p>
                    <Link className='py-2 px-7 ml-7 text-center text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 inline-block mt-8 round-sm md:text-center ' to={'/book'}>
                    Book Tickets</Link>
                </div>
               </section>
            </main>

    );
}
export default Movie;