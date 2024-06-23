import React, { useState } from "react";
import MovieCard from "../components/Moviecard";
import axios from 'axios' 
import { useLoaderData } from "react-router-dom";

export async function loader() {
    const response = await axios.get('http://localhost:3000/movies');
    const movies = response.data
    return { movies };
  }

function Home(props)
{
    const {movies} =useLoaderData()
    return(
        <main>
            
            <section className="py-20 ccontainer  px-4 mx-auto">
            <h2  className="text-2xl font-bold">RUNNING NOW...</h2>

            <div className="grid grid-cols-4 gap-6 mt-8">
                {
                    movies.map(movie=>
                        {
                            return(
                                <MovieCard key={movie._id} movie={movie} />

                            )
                        }
                    )
                }
            </div>
            </section> 
        </main>
    )
}

export default Home;