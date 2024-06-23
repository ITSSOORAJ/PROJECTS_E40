import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props){
    const movie =props.movie
    return(
        <article className="shadow-sm  shadow-lg shadow-cyan-500/50 rounded-2-xl">
            <Link to = {`/movies/${ movie._id}`}>
            <img className="rounded-3xl" src  ={movie.thumbnail} />
            </Link>
            
            <h3 className="ml-5 font-semibold">{movie.title}</h3>
            <span className="ml-5 font-thin">{movie.genere.title}</span>
        </article>
    )
}

export default MovieCard;