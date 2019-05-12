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
                return <Movie key={key} id={item.id} img={item.poster_path} title={item.title}/>  
            });
        } else {
            return <div className="loader">Loading...</div>
        }
    }
    return (
        <div className="grid">
            {renderMovies() }
        </div>
    )
}

export default Grid;