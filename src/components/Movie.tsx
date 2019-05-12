import React from 'react';
import { Link } from "react-router-dom";

import './Movie.css';
import mi from '../img/missing_img.png';

interface MovieProps {
    id: number,
    img: string,
    title: string
}

const Movie: React.FC<MovieProps> = ({id, img, title}) => {
    const url = "/movie/" + id;
    let src = "https://image.tmdb.org/t/p/w500/"+img;

    if (img === null) {
        src = mi;
    }
    
    return (
        <Link to={url} className="movie" title={title}>
            <img className="movie-poster" src={src} alt={title} />
            <div className="movie-text">{title}</div>
        </Link>
    )
}

export default Movie;