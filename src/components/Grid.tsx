import React from 'react';

import './Grid.css';
import Movie from './Movie';

interface GridProps {
    movies: any;
}

const Grid: React.FC<GridProps> = ({movies}) => {
    const renderMovies = () => {
        if (movies.hasOwnProperty('results')) {
            return movies.results.map((item:any, key:number) => {
                return <li><Movie key={key} id={item.id} img={item.poster_path} title={item.title}/></li>  
            });
        } else {
            return <li><div className="loader">Loading...</div></li>
        }
    }
    return (
        <ul className="grid">
            {renderMovies() }
        </ul>
    )
}

export default Grid;